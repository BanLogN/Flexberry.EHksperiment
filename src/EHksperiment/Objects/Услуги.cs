﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.EHksperiment
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Услуги.
    /// </summary>
    // *** Start programmer edit section *** (Услуги CustomAttributes)

    // *** End programmer edit section *** (Услуги CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугиE", new string[] {
            "Прайс as \'Прайс\'",
            "Прайс.Цена as \'Цена\'",
            "Прайс.ИмяУслуг",
            "Прайс.ИмяУслуг.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Прайс.Цена"})]
    [MasterViewDefineAttribute("УслугиE", "Прайс", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Цена")]
    [View("УслугиL", new string[] {
            "Прайс.Цена as \'Цена\'"})]
    public class Услуги : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.EHksperiment.Прайс fПрайс;
        
        // *** Start programmer edit section *** (Услуги CustomMembers)

        // *** End programmer edit section *** (Услуги CustomMembers)

        
        /// <summary>
        /// Услуги.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.Прайс CustomAttributes)

        // *** End programmer edit section *** (Услуги.Прайс CustomAttributes)
        [PropertyStorage(new string[] {
                "Прайс"})]
        [NotNull()]
        public virtual IIS.EHksperiment.Прайс Прайс
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.Прайс Get start)

                // *** End programmer edit section *** (Услуги.Прайс Get start)
                IIS.EHksperiment.Прайс result = this.fПрайс;
                // *** Start programmer edit section *** (Услуги.Прайс Get end)

                // *** End programmer edit section *** (Услуги.Прайс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.Прайс Set start)

                // *** End programmer edit section *** (Услуги.Прайс Set start)
                this.fПрайс = value;
                // *** Start programmer edit section *** (Услуги.Прайс Set end)

                // *** End programmer edit section *** (Услуги.Прайс Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиE", typeof(IIS.EHksperiment.Услуги));
                }
            }
            
            /// <summary>
            /// "УслугиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиL", typeof(IIS.EHksperiment.Услуги));
                }
            }
        }
    }
}
