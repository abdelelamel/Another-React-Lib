import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import {
  Avatar,
  Button,
  Collapse,
  Dropdown,
  FlatButton,
  Form,
  GhostButton,
  LoadingButton,
  ProgressBar,
  Profile,
  Tabs,
  Tab,
  Radio,
  RadioGroup,
  SimpleRedButton,
  SocialIcon,
  Searchbar,
  TwitterShare,
  Header,
  ExtendedText,
  Checkbox,
  Switch,
  Notification,
  StickyButton,
  Datepicker,
  Spinner
} from "../../src/index";

const Tab1 = () => {
  return <div>Tab1</div>;
}

const Tab2 = () => {
  return <div>Tab2</div>;
}

class Demo extends Component {
  handleItemClick(item) {
    window.alert("You selected : " + item);
  };

  state = {
    checked: false,
    value: ""
  };
  handleChange2 = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    window.alert("You submit the value : " + this.state.value);
  };
  render() {
    const items = ['One', 'Two', 'Three']
    const handleChange1 = () => {
      console.log("abcd");
    };

    let options = [
      {
        id: 1,
        label: 'Cat'
      },
      {
        id: 2,
        label: 'Dog'
      },
      {
        id: 2,
        label: 'Monkey'
      },
    ]

    return (
      <div>
        <h2>Avatar Component</h2>
        <Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />
        <br />

        <h2>Button Component</h2>
        <Button
          text={"best button ever"}
          size="medium"
          styles={{ color: "white" }}
          buttonColor="blue"
          handleClick={() => alert("hello world")}
        />
        <br />

        <h2>Collapse Component</h2>
        <Collapse collapseHeader={'Click me'} collapseBody={'Sup, dude!'} />
        <br />

        <h2>Dropdown Component</h2>
        <Dropdown menuItems={items} onItemClick={this.handleItemClick} />
        <br />

        <h2>Extended Text Component</h2>
        <ExtendedText
          characterAmount={10}
          text={
            "This is sample display text that can be expanded to view in its entirety by clicking read more."
          }
        />
        <br />

        <h2>Flat Buttons</h2>
        <FlatButton
          text={"best button ever"}
          size="small"
          buttonColor="red"
          handleClick={() => alert("Flatted world")}
        />

        <br />
        <FlatButton
          text={'best button ever'}
          size='small'
          buttonColor='green'
          handleClick={() => alert('Flatted world')} />
        <br />

        <h2>Form Component</h2>
        <Form fields={["input", "textarea", "button"]} />
        <br />

        <h2>Ghost Button</h2>
        <GhostButton buttonColor='red' text={"Spooky Button"} size='small' handleClick={() => alert('Boo!')} />
        <br />
        <GhostButton buttonColor='green' text={"Spooky Button"} size='small' handleClick={() => alert('Boo!')} />
        <br />

        <h2>Header Component</h2>
        <Header brandName={"My Awesome Site"} />
        <br />

        <h2>Loading Button Component</h2>
        Loading =
        <LoadingButton loading={true} />
        <br />
        Not Loading =
        <LoadingButton />
        <br />

        <h2>Notification</h2>
        <Notification number={10} color={"red"} />
        <br />
        <Notification number={10} color={"blue"} />
        <br />

        <h2>Profile Component</h2>
        <Profile
          name={"Joshua"}
          image={{
            sourceType: "url",
            location:
              "https://avatars2.githubusercontent.com/u/52901917?s=88&v=4"
          }}
          bio={"Full Stack Engineer"}
          link={{
            source: "https://github.com/Joshua-Burleson",
            text: "GitHub"
          }}
          socials={[
            { name: "facebook", source: "https://www.facebook.com/zuck" }
          ]}
        />
        <br />

        <h2>Progress Bar Component</h2>
        <ProgressBar progress={9}
          fillColor={'red'}
          containerClassName='container-style'
          containerStyle={{
            justifyContent: 'center',
            height: 50,
            borderRadius: 0,
            borderWidth: 1,
            borderColor: 'black'
          }} />
        <br />

        <h2>Radio Buttons</h2>
        <RadioGroup name="xx" selectedValue="Orange" onChange={handleChange1}>
          <Radio value="Orange" />
          <Radio value="Apple" />
        </RadioGroup>
        <br />

        <h2>Search Bar Component</h2>
        <Searchbar
          value={this.state.value}
          onChange={this.handleChange2}
          onSubmit={this.handleSubmit}
        />
        <br />

        <h2>Simple Red Button</h2>
        <SimpleRedButton text={"Shinny Red Button"} />
        <br />



        <h2>Share on Twitter</h2>
        <TwitterShare message="Hi" size="md" />

        <h2>Form Component</h2>
        <Form fields={["input", "textarea", "button"]} />

        <h2>Sticky Button</h2>
        <StickyButton text={'Go Top'} buttonColor='blue' size='sm' behavior='smooth' />

        <h2>Social Icon Component</h2>
        <SocialIcon name={"twitter"} />
        <SocialIcon name={"facebook"} />
        <br />

        <h2>Switch Component</h2>
        <Switch
          value="Switch 1"
          checked={!this.state.checked}
          onClick={this.handleChecked}
        />
        <br />
        <br />
        <Switch
          value="Switch 2"
          checked={this.state.checked}
          onClick={this.handleChecked}
        />
        <br />

        <h2>Tab Component</h2>
        <Tabs defaultTab={0}>
          <Tab component={Tab1} title="Default Tab" />
          <Tab component={Tab2} title="Tab 2" />
        </Tabs>
        <br />

        <h2>Twitter Share Component</h2>
        <TwitterShare message="Hi" size="md" />


        <h2>Form Component</h2>
        <Form fields={["input", "textarea", "button"]} />

        <h2>Spinner Component</h2>
        <div style={{ display: 'flex' }}>
          <Spinner />
          <Spinner size={20} color="rgb(237, 100, 157)" speed={4} thick={5} background="#fff267" />
          <Spinner size={50} color="rgb(237, 132, 100)" speed={1} thick={10} background="#22f267" />
        </div>
        <Checkbox options={options} onClick={handleChange} title="Animals"></Checkbox>
        <h2>Datepicker Component</h2>
        <Datepicker></Datepicker>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
