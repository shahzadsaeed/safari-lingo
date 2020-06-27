import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

class LandingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Take Quiz"
          onPress={() => {
            this.props.navigation.navigate('QuestionScreen');
          }}
        />
      </View>
    );
  }
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
