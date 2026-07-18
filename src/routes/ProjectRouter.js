import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import ListSelfRegister from "../pages/agent-portal/ListSelfRegister";
import AddTask from "../pages/agent-portal/dashboard/AddTask";
import Dashboard from "../pages/agent-portal/dashboard/Dashboard";
import MainListItems from "../pages/agent-portal/dashboard/MainListItems";
import PostAdd from "../pages/agent-portal/dashboard/PostAdd";
import Explore from "../pages/agent-portal/dashboard/Explore/Explore";
import Map from "../pages/agent-portal/dashboard/Map/index"; //it is use for Map (mapview)
import Userview from "../pages/agent-portal/dashboard/Userview"; //it is use for Map (mapview)
import index from "../pages/agent-portal/dashboard/Map/index"; //it is use for Map (mapview)
import EditProfile from "../pages/agent-portal/profile/EditProfile";
import AgentSignIn from "../pages/agent-portal/AgentSignIn";
import AgentEmailVerfied from "../pages/agent-portal/AgentEmailVerfied";

import Cer from "../pages/agent-portal/dashboard/Certificate/Cer";

import Primary_Quaterly_Marksheet from "../pages/agent-portal/dashboard/Marksheet/Primary_Quaterly_Marksheet";
import Secondary_Marksheet from "../pages/agent-portal/dashboard/Marksheet/Secondary_Marksheet";
import SrSecondary_Marksheet from "../pages/agent-portal/dashboard/Marksheet/SrSecondary_Marksheet";
import Pcm_Marksheet from "../pages/agent-portal/dashboard/Marksheet/Pcm_Marksheet";
import Pcb_Marksheet from "../pages/agent-portal/dashboard/Marksheet/Pcb_Marksheet";
import Commerce_Marksheet from "../pages/agent-portal/dashboard/Marksheet/Commerce_Marksheet";
import Arts_Marksheet from "../pages/agent-portal/dashboard/Marksheet/Arts_Marksheet";
import Agriculture_Marksheet from "../pages/agent-portal/dashboard/Marksheet/Agriculture_Marksheet";

import Tc from "../pages/agent-portal/dashboard/Tc/Tc.js";

import SecondaryTC from "../pages/agent-portal/dashboard/Tc/SecondaryTC";

import PriTC from "../pages/agent-portal/dashboard/Tc/PriTC";
import SrSecondaryTC from "../pages/agent-portal/dashboard/Tc/SrSecondaryTC";
import PcmTC from "../pages/agent-portal/dashboard/Tc/PcmTC";
import PcbTC from "../pages/agent-portal/dashboard/Tc/PcbTC";
import CommerceTC from "../pages/agent-portal/dashboard/Tc/CommerceTC";

import CharacterCertificate from "../pages/agent-portal/dashboard/CharacterCertificate/CharacterCertificate";

import ShowStudents from "../pages/agent-portal/dashboard/showStudent/ShowStudents";

import PrivacyPolicy from "../pages/agent-portal/dashboard/PrivacyPolicy";

function ProjectRouter(props) {
  return (
    <Router>
      <div>
        <Route
          history={props.history}
          path="/"
          component={AgentSignIn}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/AgentSignIn"
          component={AgentSignIn}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/ListSelfRegister"
          component={ListSelfRegister}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/AddTask"
          component={AddTask}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/Dashboard"
          component={Dashboard}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/MainListItems"
          component={MainListItems}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/PostAdd"
          component={PostAdd}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/Explore"
          component={Explore}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/Map"
          component={Map}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/Userview"
          component={Userview}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/index"
          component={index}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/EditProfile"
          component={EditProfile}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/AgentEmailVerfied"
          component={AgentEmailVerfied}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/PrivacyPolicy"
          component={PrivacyPolicy}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/PriMarksheet"
          component={Primary_Quaterly_Marksheet}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/SecondaryMarksheet"
          component={Secondary_Marksheet}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/SrSecondaryMarksheet"
          component={SrSecondary_Marksheet}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/PcmMarksheet"
          component={Pcm_Marksheet}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/PcbMarksheet"
          component={Pcb_Marksheet}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/CommerceMarksheet"
          component={Commerce_Marksheet}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/ArtsMarksheet"
          component={Arts_Marksheet}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/AgricultureMarksheet"
          component={Agriculture_Marksheet}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/Tc"
          component={Tc}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/PriTC"
          component={PriTC}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/SecondaryTC"
          component={SecondaryTC}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/SrSecondaryTC"
          component={SrSecondaryTC}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/PcmTC"
          component={PcmTC}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/PcbTC"
          component={PcbTC}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/CommerceTC"
          component={CommerceTC}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/CharacterCertificate"
          component={CharacterCertificate}
          strict
          exact
        ></Route>

        <Route
          history={props.history}
          path="/Cer"
          component={Cer}
          strict
          exact
        ></Route>
        <Route
          history={props.history}
          path="/ShowStudents"
          component={ShowStudents}
          strict
          exact
        ></Route>
      </div>
    </Router>
  );
}

export default ProjectRouter;
