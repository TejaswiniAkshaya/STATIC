import SwitchTab from "./components/switch-tab";
import MentorBody from "./components/mentor-body";

export default function Home() {
  return (
    <div className="main-body" 
    style={{
     border:"1px solid black"
    }}>
    <SwitchTab/>
    <MentorBody/>
    
    </div>
  );
}
