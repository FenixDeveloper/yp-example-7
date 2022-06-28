import React from "react";
import "./App.scss";
import { Layout } from "./components/layout/Layout";
import { Header } from "./components/header/Header";
import { Logo } from "./components/logo/Logo";
import { Menu } from "./components/menu/Menu";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";
import { Widget, SIZE_1, SIZE_2, SIZE_3, SIZE_4 } from "./components/widget/Widget";

function CommonHeader() {
  return <React.Fragment>
    <Logo />
    <h1>dashboard</h1>
    <Menu items={[
      { label: "Page 1", url: "/page1" },
      { label: "Page 2", url: "/page1", isActive: true },
      { label: "Page 3", url: "/page1" }
    ]} />
  </React.Fragment>;
}

function App() {
  return (<Layout
    header={<Header items={<CommonHeader />} />}
    sidebar={<Sidebar />}
    footer={<Footer />}
  >
    <Widget title="Demo 1" className={SIZE_1}>
      test widget
    </Widget>
    <Widget title="Demo 2" className={SIZE_1}>
      <input type="text" value="hello" />
    </Widget>
    <Widget title="Demo 3" className={SIZE_1}>
      <button>CLICK ME!</button>
    </Widget>
    <Widget title="Demo 4" className={SIZE_1}>
      test widget
    </Widget>
    <Widget title="Demo 5" className={SIZE_2}>
      <table>
        <thead>
          <tr>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell 1.1</td>
            <td>cell 1.2</td>
            <td>cell 1.3</td>
          </tr>
          <tr>
            <td>cell 2.1</td>
            <td>cell 2.2</td>
            <td>cell 2.3</td>
          </tr>
        </tbody>
      </table>
    </Widget>
    <Widget title="Demo 6" className={SIZE_1}>
      test widget
    </Widget>
    <Widget title="Demo 7" className={SIZE_1}>
      test widget
    </Widget>
    <Widget title="Demo 8" className={SIZE_3}>
      test widget
    </Widget>
    <Widget title="Demo 9" className={SIZE_1}>
      test widget
    </Widget>
    <Widget title="Demo 10" className={SIZE_4}>
      test widget
    </Widget>
  </Layout>);
}

export default App;
