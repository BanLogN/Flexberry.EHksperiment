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
    /// Прайс.
    /// </summary>
    // *** Start programmer edit section *** (Прайс CustomAttributes)

    // *** End programmer edit section *** (Прайс CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПрайсE", new string[] {
            "Цена as \'Цена\'",
            "ИмяУслуг as \'Имя услуг\'",
            "ИмяУслуг.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "ИмяУслуг.Наименование"})]
    [MasterViewDefineAttribute("ПрайсE", "ИмяУслуг", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ПрайсL", new string[] {
            "Цена as \'Цена\'",
            "ИмяУслуг.Наименование as \'Наименование\'"})]
    public class Прайс : ICSSoft.STORMNET.DataObject
    {
        
        private double fЦена;
        
        private IIS.EHksperiment.ИмяУслуг fИмяУслуг;
        
        // *** Start programmer edit section *** (Прайс CustomMembers)

        // *** End programmer edit section *** (Прайс CustomMembers)

        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Прайс.Цена CustomAttributes)

        // *** End programmer edit section *** (Прайс.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (Прайс.Цена Get start)

                // *** End programmer edit section *** (Прайс.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (Прайс.Цена Get end)

                // *** End programmer edit section *** (Прайс.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прайс.Цена Set start)

                // *** End programmer edit section *** (Прайс.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Прайс.Цена Set end)

                // *** End programmer edit section *** (Прайс.Цена Set end)
            }
        }
        
        /// <summary>
        /// Прайс.
        /// </summary>
        // *** Start programmer edit section *** (Прайс.ИмяУслуг CustomAttributes)

        // *** End programmer edit section *** (Прайс.ИмяУслуг CustomAttributes)
        [PropertyStorage(new string[] {
                "ИмяУслуг"})]
        [NotNull()]
        public virtual IIS.EHksperiment.ИмяУслуг ИмяУслуг
        {
            get
            {
                // *** Start programmer edit section *** (Прайс.ИмяУслуг Get start)

                // *** End programmer edit section *** (Прайс.ИмяУслуг Get start)
                IIS.EHksperiment.ИмяУслуг result = this.fИмяУслуг;
                // *** Start programmer edit section *** (Прайс.ИмяУслуг Get end)

                // *** End programmer edit section *** (Прайс.ИмяУслуг Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Прайс.ИмяУслуг Set start)

                // *** End programmer edit section *** (Прайс.ИмяУслуг Set start)
                this.fИмяУслуг = value;
                // *** Start programmer edit section *** (Прайс.ИмяУслуг Set end)

                // *** End programmer edit section *** (Прайс.ИмяУслуг Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПрайсE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПрайсE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПрайсE", typeof(IIS.EHksperiment.Прайс));
                }
            }
            
            /// <summary>
            /// "ПрайсL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПрайсL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПрайсL", typeof(IIS.EHksperiment.Прайс));
                }
            }
        }
    }
}
