import React, {Component} from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Notification from './components/Notification';
import Input from './components/Input';
import LoginForm from './components/LoginForm';
import Form from './components/Form';

import itemsList from './config/form';



function handleButtonClick() {
	alert('button clicked');
}

class App extends Component {

	state = {
 		inputValue: "input value "
 	}
 
 	onInputChangeHandler(e) {
 		this.setState({ inputValue: e.target.value });
 	}
 
 	onSubmitLoginForm(login, password) {
 		console.log("Login: " );
 	}
 
	render() {
		return (
			<div>
				{/*
					Component:
						Button

					Props:
						type (possible values: primary - default / secondary / disabled)
						loading (possible values: true / false)
						onButtonClick (function)
				*/}
				<Button onButtonClick={handleButtonClick}>Hello</Button>


				{/*
					Component:
						Text

					Props:
						heading (possible values: true / false - default)
						size (possible values: small / medium - default / large)
				*/}
				<Text heading={true} size="large" />


				{/*
					Component:
						Notification

					Props:
						type (possible values: success / danger / info - default)
				*/}
				<Notification>Notification text </Notification>	


				{/*
					Component:
						Input

					Props:
						type (email / text - default / phone / textarea / password)
						name (string)
						placeholder (string)
						label (string)
						value (string)
						size (possible values: small / medium - default / large)
						error (string)
						onInputChange (function)
				*/}
				<Input
 					name="phone"
					label="Phone :"
 					placeholder="Enter Phone Number"
 					value={this.state.inputValue}
 					error=""
 					onInputChange={this.onInputChangeHandler.bind(this)} 
 				/>


				{/*
					Component:
						LoginForm

					Contains:
						Two input fields - email and password
						Submit button

					Expected behavior:
						Login and password should be printed in the console on submit button click
				*/}
				<LoginForm submitForm={this.onSubmitLoginForm} />


				{/*
					Component:
						Form

					Props:
						config (array of objects) - required
				*/}
				<Form config={itemsList}/>

			</div>
		);
	}
}

export default App;
