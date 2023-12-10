import CheckBoxView from "./component/check_box/checkbox_veiw";
import CounterDesign from "./component/counter/counter_design";
import DropdownView from "./component/dropdown/dropdown_view";
import Radio_view from "./component/radio/radio_view";
import TextfeildView from "./component/textfeild/text_field_view";


function App() {
  return (
    <div className="App">
      <CounterDesign/>
      <TextfeildView/>
      <Radio_view/>
      <CheckBoxView/>
      <DropdownView/>
    </div>
  );
}

export default App;
