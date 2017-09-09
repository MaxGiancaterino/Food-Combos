//this file will be used to create the search view screen

import React from 'react';
import { List, View, FlatList, StyleSheet, Text} from 'react-native';
import Search from 'react-native-search-box';

export default class SearchScreen extends React.Component {
	//create the title
	static navigationOptions = {
        title: 'Search',
	};

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  //create the render function
  render() {
    return (
	  <View style={styles.container}>
		<FlatList
			data={[{key: 'a'}, {key: 'b'}]}
			renderItem={({item}) => <Text style = {styles.text}>{item.key}</Text>}
			renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
		/>
		
	  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

