//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Archive
    {
        public int ArchivesId { get; set; }
        public Nullable<int> PatientId { get; set; }
        public Nullable<int> TherapistId { get; set; }
        public Nullable<System.DateTime> MeetDate { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public Nullable<bool> IsDone { get; set; }
    
        public virtual Category Category { get; set; }
        public virtual Category Category1 { get; set; }
        public virtual Therapist Therapist { get; set; }
    }
}
