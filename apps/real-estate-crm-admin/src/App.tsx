import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { AgentList } from "./agent/AgentList";
import { AgentCreate } from "./agent/AgentCreate";
import { AgentEdit } from "./agent/AgentEdit";
import { AgentShow } from "./agent/AgentShow";
import { LocaleList } from "./locale/LocaleList";
import { LocaleCreate } from "./locale/LocaleCreate";
import { LocaleEdit } from "./locale/LocaleEdit";
import { LocaleShow } from "./locale/LocaleShow";
import { ImageCustomFieldList } from "./imageCustomField/ImageCustomFieldList";
import { ImageCustomFieldCreate } from "./imageCustomField/ImageCustomFieldCreate";
import { ImageCustomFieldEdit } from "./imageCustomField/ImageCustomFieldEdit";
import { ImageCustomFieldShow } from "./imageCustomField/ImageCustomFieldShow";
import { ListCustomFieldList } from "./listCustomField/ListCustomFieldList";
import { ListCustomFieldCreate } from "./listCustomField/ListCustomFieldCreate";
import { ListCustomFieldEdit } from "./listCustomField/ListCustomFieldEdit";
import { ListCustomFieldShow } from "./listCustomField/ListCustomFieldShow";
import { PropertyTranslationList } from "./propertyTranslation/PropertyTranslationList";
import { PropertyTranslationCreate } from "./propertyTranslation/PropertyTranslationCreate";
import { PropertyTranslationEdit } from "./propertyTranslation/PropertyTranslationEdit";
import { PropertyTranslationShow } from "./propertyTranslation/PropertyTranslationShow";
import { NormalCustomFieldList } from "./normalCustomField/NormalCustomFieldList";
import { NormalCustomFieldCreate } from "./normalCustomField/NormalCustomFieldCreate";
import { NormalCustomFieldEdit } from "./normalCustomField/NormalCustomFieldEdit";
import { NormalCustomFieldShow } from "./normalCustomField/NormalCustomFieldShow";
import { CustomFieldListEntryList } from "./customFieldListEntry/CustomFieldListEntryList";
import { CustomFieldListEntryCreate } from "./customFieldListEntry/CustomFieldListEntryCreate";
import { CustomFieldListEntryEdit } from "./customFieldListEntry/CustomFieldListEntryEdit";
import { CustomFieldListEntryShow } from "./customFieldListEntry/CustomFieldListEntryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"RealEstateCRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="Agent"
          list={AgentList}
          edit={AgentEdit}
          create={AgentCreate}
          show={AgentShow}
        />
        <Resource
          name="Locale"
          list={LocaleList}
          edit={LocaleEdit}
          create={LocaleCreate}
          show={LocaleShow}
        />
        <Resource
          name="ImageCustomField"
          list={ImageCustomFieldList}
          edit={ImageCustomFieldEdit}
          create={ImageCustomFieldCreate}
          show={ImageCustomFieldShow}
        />
        <Resource
          name="ListCustomField"
          list={ListCustomFieldList}
          edit={ListCustomFieldEdit}
          create={ListCustomFieldCreate}
          show={ListCustomFieldShow}
        />
        <Resource
          name="PropertyTranslation"
          list={PropertyTranslationList}
          edit={PropertyTranslationEdit}
          create={PropertyTranslationCreate}
          show={PropertyTranslationShow}
        />
        <Resource
          name="NormalCustomField"
          list={NormalCustomFieldList}
          edit={NormalCustomFieldEdit}
          create={NormalCustomFieldCreate}
          show={NormalCustomFieldShow}
        />
        <Resource
          name="CustomFieldListEntry"
          list={CustomFieldListEntryList}
          edit={CustomFieldListEntryEdit}
          create={CustomFieldListEntryCreate}
          show={CustomFieldListEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
