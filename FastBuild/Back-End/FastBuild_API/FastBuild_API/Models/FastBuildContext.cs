using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FastBuild_API.Models
{
    public partial class FastBuildContext : DbContext
    {
        public FastBuildContext()
        {
        }

        public FastBuildContext(DbContextOptions<FastBuildContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bairro> Bairro { get; set; }
        public virtual DbSet<Cliente> Cliente { get; set; }
        public virtual DbSet<Endereco> Endereco { get; set; }
        public virtual DbSet<Prestador> Prestador { get; set; }
        public virtual DbSet<PrestadorBairros> PrestadorBairros { get; set; }
        public virtual DbSet<PrestadorServicos> PrestadorServicos { get; set; }
        public virtual DbSet<ServicosContratado> ServicosContratado { get; set; }
        public virtual DbSet<TipoServico> TipoServico { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=FastBuild;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bairro>(entity =>
            {
                entity.HasKey(e => e.IdBairro);

                entity.Property(e => e.Cidade)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente);

                entity.Property(e => e.CelularPrincipal)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.CelularSecundario)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NomeCompleto)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.IdEnderecoNavigation)
                    .WithMany(p => p.Cliente)
                    .HasForeignKey(d => d.IdEndereco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Cliente_Endereco");
            });

            modelBuilder.Entity<Endereco>(entity =>
            {
                entity.HasKey(e => e.IdEndereco);

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.Complemento)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdBairroNavigation)
                    .WithMany(p => p.Endereco)
                    .HasForeignKey(d => d.IdBairro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Endereco_Bairro");
            });

            modelBuilder.Entity<Prestador>(entity =>
            {
                entity.HasKey(e => e.IdPrestador);

                entity.Property(e => e.CelularPrincipal)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.CelularSecundario)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Horarios)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.NomeCompleto)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEnderecoNavigation)
                    .WithMany(p => p.Prestador)
                    .HasForeignKey(d => d.IdEndereco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prestador_Endereco");
            });

            modelBuilder.Entity<PrestadorBairros>(entity =>
            {
                entity.HasKey(e => new { e.IdPrestador, e.IdBairro });

                entity.ToTable("Prestador_Bairros");

                entity.HasOne(d => d.IdBairroNavigation)
                    .WithMany(p => p.PrestadorBairros)
                    .HasForeignKey(d => d.IdBairro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prestador_Bairros_Bairros");

                entity.HasOne(d => d.IdPrestadorNavigation)
                    .WithMany(p => p.PrestadorBairros)
                    .HasForeignKey(d => d.IdPrestador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prestador_Bairros_Prestador");
            });

            modelBuilder.Entity<PrestadorServicos>(entity =>
            {
                entity.HasKey(e => new { e.IdPrestador, e.IdTipoServico });

                entity.ToTable("Prestador_Servicos");

                entity.Property(e => e.Preco).HasColumnType("money");

                entity.HasOne(d => d.IdPrestadorNavigation)
                    .WithMany(p => p.PrestadorServicos)
                    .HasForeignKey(d => d.IdPrestador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prestador_Servicos_Prestador");

                entity.HasOne(d => d.IdTipoServicoNavigation)
                    .WithMany(p => p.PrestadorServicos)
                    .HasForeignKey(d => d.IdTipoServico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Prestador_Servicos_TipoServico");
            });

            modelBuilder.Entity<ServicosContratado>(entity =>
            {
                entity.HasKey(e => new { e.IdCliente, e.IdPrestador, e.IdTipoServico });

                entity.ToTable("Servicos_Contratado");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.ServicosContratado)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Servicos_Contratado_Cliente");

                entity.HasOne(d => d.IdPrestadorNavigation)
                    .WithMany(p => p.ServicosContratado)
                    .HasForeignKey(d => d.IdPrestador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Servicos_Contratado_Prestador");

                entity.HasOne(d => d.IdTipoServicoNavigation)
                    .WithMany(p => p.ServicosContratado)
                    .HasForeignKey(d => d.IdTipoServico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Servicos_Contratado_TipoServico");
            });

            modelBuilder.Entity<TipoServico>(entity =>
            {
                entity.HasKey(e => e.IdTipoServico);

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });
        }
    }
}
