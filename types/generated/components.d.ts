import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
    icon: 'archive';
    description: '';
  };
  attributes: {
    nameCompany: Attribute.String;
    addressCompany: Attribute.Text;
    cityCompany: Attribute.String;
    postCodeCompany: Attribute.Integer & Attribute.Required;
    emailCompany: Attribute.Email;
    phoneCompany: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 10;
      }>;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'section';
    icon: 'dashboard';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    media: Attribute.Media;
    disposition: Attribute.Enumeration<
      ['leftPicture', 'centerPicture', 'rightPicture', 'withoutPicture']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'withoutPicture'>;
  };
}

export interface VariousOpeningDate extends Schema.Component {
  collectionName: 'components_various_opening_dates';
  info: {
    displayName: 'openingDate';
    description: '';
  };
  attributes: {
    day: Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    >;
    openMorning: Attribute.Time & Attribute.DefaultTo<'00:00'>;
    openAfternoon: Attribute.Time;
    closeMorning: Attribute.Time;
    closeAfternoon: Attribute.Time;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact': ContactContact;
      'section.section': SectionSection;
      'various.opening-date': VariousOpeningDate;
    }
  }
}
