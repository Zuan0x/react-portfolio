import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { cookstoves } from "../pages/cookstoves";
import { creol } from "../pages/creol";
import { klima } from "../pages/klima";
import { carbonFYI } from "../pages/carbonfyi";
import { ivy } from "../pages/ivy"
import { copilot } from "../pages/co-pilot"
import { bitgreen } from "../pages/bitgreen";
import { hyrox } from "../pages/hyrox";
import { conway } from "../pages/conway";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/cookstoves" component={cookstoves} />
        <Route path="/creol" component={creol} />
        <Route path="/klima" component={klima} />
        <Route path="/carbon-fyi" component={carbonFYI} />
        <Route path="/ivy" component={ivy} />
        <Route path="/co-pilot" component={copilot} />
        <Route path="/bitgreen" component={bitgreen} />
        <Route path="/hyrox" component={hyrox} />
        <Route path="/conway" component={conway} />
        <Route path="*" component={Home} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
