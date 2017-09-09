//this file will hold the list view component for the search results

import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class ListViewComponent extends Component {

	render() {
		return(
			<View>
				<Text>Here is some text</Text>

			</View>
		);
	}
}

AppRegistry.registerComponent("ListVeiwComponent", () => ListViewCompoent);
