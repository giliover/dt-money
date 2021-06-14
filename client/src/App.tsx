import React from "react";
import Header from "components/Header";
import Dashboard from "components/Dashboard";
import NewTransactionModal from "components/NewTransactionModal";
import GlobalStyle from "styles/global";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal />
    </>
  );
}

export default App;
