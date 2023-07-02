import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EntityList } from "./entity/EntityList";
import { EntityCreate } from "./entity/EntityCreate";
import { EntityEdit } from "./entity/EntityEdit";
import { EntityShow } from "./entity/EntityShow";
import { LedgerList } from "./ledger/LedgerList";
import { LedgerCreate } from "./ledger/LedgerCreate";
import { LedgerEdit } from "./ledger/LedgerEdit";
import { LedgerShow } from "./ledger/LedgerShow";
import { JournalList } from "./journal/JournalList";
import { JournalCreate } from "./journal/JournalCreate";
import { JournalEdit } from "./journal/JournalEdit";
import { JournalShow } from "./journal/JournalShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { ChartOfAccountList } from "./chartOfAccount/ChartOfAccountList";
import { ChartOfAccountCreate } from "./chartOfAccount/ChartOfAccountCreate";
import { ChartOfAccountEdit } from "./chartOfAccount/ChartOfAccountEdit";
import { ChartOfAccountShow } from "./chartOfAccount/ChartOfAccountShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"bookkeeping"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Entity"
          list={EntityList}
          edit={EntityEdit}
          create={EntityCreate}
          show={EntityShow}
        />
        <Resource
          name="Ledger"
          list={LedgerList}
          edit={LedgerEdit}
          create={LedgerCreate}
          show={LedgerShow}
        />
        <Resource
          name="Journal"
          list={JournalList}
          edit={JournalEdit}
          create={JournalCreate}
          show={JournalShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="ChartOfAccount"
          list={ChartOfAccountList}
          edit={ChartOfAccountEdit}
          create={ChartOfAccountCreate}
          show={ChartOfAccountShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
