﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Natural_wayEntities1 : DbContext
    {
        public Natural_wayEntities1()
            : base("name=Natural_wayEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Applicants> Applicants { get; set; }
        public virtual DbSet<Archives> Archives { get; set; }
        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Feedbacks> Feedbacks { get; set; }
        public virtual DbSet<Meets> Meets { get; set; }
        public virtual DbSet<Patients> Patients { get; set; }
        public virtual DbSet<ServiceAreas> ServiceAreas { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<Therapists> Therapists { get; set; }
        public virtual DbSet<WorkHours> WorkHours { get; set; }
    }
}
