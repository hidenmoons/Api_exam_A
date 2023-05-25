using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API_EXAM.Models;

public partial class ExamenContext : DbContext
{
    public ExamenContext()
    {
    }

    public ExamenContext(DbContextOptions<ExamenContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Articulo> Articulos { get; set; }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Tienda> Tienda { get; set; }

    public virtual DbSet<Venta> Ventas { get; set; }
    public virtual DbSet<Compras> Compras { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost; Database=Examen; Trusted_Connection=True; TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Articulo>(entity =>
        {
            entity.HasKey(e => e.Codigo).HasName("PK__Articulo__06370DAD9F38F690");

            entity.Property(e => e.Codigo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Descripcion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Fecha).HasColumnType("datetime");
            entity.Property(e => e.Imagen)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.TiendaId).HasColumnName("Tienda_ID");

            entity.HasOne(d => d.Tienda).WithMany(p => p.Articulos)
                .HasForeignKey(d => d.TiendaId)
                .HasConstraintName("FK__Articulos__Tiend__267ABA7A");
        });

        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.HasKey(e => e.ClienteId).HasName("PK__Clientes__EB6B387CFDB8BF4B");

            entity.Property(e => e.ClienteId).HasColumnName("Cliente_id");
            entity.Property(e => e.Apellidos)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Direccion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Fecha).HasColumnType("datetime");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
            .HasColumnName("Correo")
            .HasMaxLength(50);
        });

        modelBuilder.Entity<Tienda>(entity =>
        {
            entity.HasKey(e => e.TiendaId).HasName("PK__Tienda__10685B06A9B26C64");

            entity.Property(e => e.TiendaId).HasColumnName("Tienda_ID");
            entity.Property(e => e.Direccion)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Sucursal)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Venta>(entity =>
        {
            entity.HasKey(e => e.VentaId).HasName("PK__Ventas__24B17710FAF74B17");

            entity.Property(e => e.VentaId).HasColumnName("Venta_ID");
            entity.Property(e => e.ClienteId).HasColumnName("Cliente_ID");
            entity.Property(e => e.CodArticulo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Cod_Articulo");
            entity.Property(e => e.Fecha).HasColumnType("datetime");

            entity.HasOne(d => d.Cliente).WithMany(p => p.Venta)
                .HasForeignKey(d => d.ClienteId)
                .HasConstraintName("FK__Ventas__Cliente___5535A963");

            entity.HasOne(d => d.CodArticuloNavigation).WithMany(p => p.Venta)
                .HasForeignKey(d => d.CodArticulo)
                .HasConstraintName("FK__Ventas__Cod_Arti__2C3393D0");
        });
        modelBuilder.Entity<Compras>(entity =>
        {
            entity.HasKey(e => e.VentaId).HasName("PK__Compras__Venta_ID");

            entity.ToTable("Compras");

            entity.Property(e => e.VentaId)
                .HasColumnName("Venta_ID")
                .ValueGeneratedOnAdd();

            entity.Property(e => e.ClienteId)
                .HasColumnName("Cliente_ID");

            entity.Property(e => e.Fecha)
                .HasColumnType("datetime");

            entity.Property(e => e.Total)
                .HasColumnType("decimal(10, 2)");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
