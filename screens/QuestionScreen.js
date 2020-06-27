import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Ionicons_Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons_Icon from 'react-native-vector-icons/SimpleLineIcons';
import Foundation_Icon from 'react-native-vector-icons/Foundation';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Button from '../components/Button';
import quiz_data from '../components/data';

const quiz_length = quiz_data.length;

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const renderTime = ({remainingTime}) => {
	if(remainingTime < 10){
		remainingTime = "0"+remainingTime;
	}

  return (
    <View
      style={{
				backgroundColor: 'black',
				padding:Height*0.018,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: Width*0.06, fontWeight: '300'}}>
        {remainingTime}
      </Text>
    </View>
  );
};

class QuestionScreen extends React.Component {
  state = {
    selected: null,
    heartColor: '#B3B9C6',
    flagColor: '#B3B9C6',
  };

  onSelectedChange = (current) => {
		this.setState({selected: current});
  };

  onHeartPress = () => {
    if (this.state.heartColor == '#B3B9C6') {
      this.setState({heartColor: '#F65A84'});
    } else {
      this.setState({heartColor: '#B3B9C6'});
    }
  };

  onFlagPress = () => {
    if (this.state.flagColor == '#B3B9C6') {
      this.setState({flagColor: '#62C931'});
    } else {
      this.setState({flagColor: '#B3B9C6'});
    }
  };

  renderQuiz = () => {
    return quiz_data.map((quiz) => {
      return (
        <View key={quiz.key}>
          <View style={styles.headerStyle2}>
            <Text style={{color: '#71767B', fontSize: Width*0.04}}>
              Qusetion {quiz.key}/{quiz_length}
            </Text>
          </View>
          <View style={styles.mainSection}>
            <View style={{marginBottom: Height*0.073}}>
              <Text style={{color: 'white', fontSize: Width*0.06, textAlign: 'center'}}>
                {quiz.question}
              </Text>
            </View>
            <View>
              <Button
                onPress={() => {
                  this.onSelectedChange('1');
                }}
                Color={this.state.selected == '1' ? 'white' : '#3A3F47'}
                textColor={this.state.selected == '1' ? 'black' : 'white'}>
                {quiz.option1}
              </Button>
              <Button
                onPress={() => {
                  this.onSelectedChange('2');
                }}
                Color={this.state.selected == '2' ? 'white' : '#3A3F47'}
                textColor={this.state.selected == '2' ? 'black' : 'white'}>
                {quiz.option2}
              </Button>
              <Button
                onPress={() => {
                  this.onSelectedChange('3');
                }}
                Color={this.state.selected == '3' ? 'white' : '#3A3F47'}
                textColor={this.state.selected == '3' ? 'black' : 'white'}>
                {quiz.option3}
              </Button>
              <Button
                onPress={() => {
                  this.onSelectedChange('4');
                }}
                Color={this.state.selected == '4' ? 'white' : '#3A3F47'}
                textColor={this.state.selected == '4' ? 'black' : 'white'}>
                {quiz.option4}
              </Button>
            </View>
          </View>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.quiz_screen}>
          <View style={styles.headerStyle1}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LandingPage');
              }}>
              <Ionicons_Icon
                name="md-arrow-round-back"
                size={Height * 0.045}
                color="#34CDD4"
              />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: Width*0.05}}>
              Molecular Biology
            </Text>
            <View>
              <Menu>
                <MenuTrigger>
                  <SimpleLineIcons_Icon
                    name="options"
                    size={Height * 0.045}
                    color="#34CDD4"
                  />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                  <MenuOption onSelect={() => alert(`Delete`)}>
                    <Text style={{color: 'red'}}>Delete</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View>
          {this.renderQuiz()}
          <View style={styles.footer}>
            <TouchableOpacity onPress={this.onFlagPress}>
              <Foundation_Icon
                name="flag"
                size={Height * 0.045}
                color={this.state.flagColor}
              />
            </TouchableOpacity>
            <View style={{position: 'absolute', left: '45%', top: -Height*0.052}}>
              <CountdownCircleTimer
								isPlaying
								strokeWidth={20}
								trailColor="#42464E"
                size={Height*0.102}
                rotation="counterclockwise"
								duration={30}
								onComplete={()=>{alert(`Time completed`)}}
                colors={[['#60C932']]}>
                {renderTime}
              </CountdownCircleTimer>
            </View>
            <TouchableOpacity onPress={this.onHeartPress}>
              <Foundation_Icon
                name="heart"
                size={Height * 0.045}
                color={this.state.heartColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: Height*0.028,
  },
  quiz_screen: {
    flex: 1,
    backgroundColor: '#3A3F47',
    borderRadius: 5,
    position: 'relative',
  },
  headerStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Height*0.028,
    paddingTop: Height*0.045,
    paddingBottom: 0,
  },
  headerStyle2: {
    alignItems: 'center',
  },
  mainSection: {
    padding: Height*0.045,
    paddingTop: Height*0.072,
    width: Width * 0.9,
  },
  footer: {
    backgroundColor: '#69738D',
    height: Height*0.072,
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    padding: Height*0.014,
  },
});
