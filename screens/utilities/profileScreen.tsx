import { View, Text, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { styles } from "../../styles";
import TextInputEditableComponent from "../../components/textInputEditableComponent";
import { ButtonComponent } from "../../components/buttonComponent";


export const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/Ellipse_BG.png')}
      >
        <StatusBar backgroundColor={'#0EBE7F'} barStyle={'light-content'} />
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', paddingStart: 20, backgroundColor: '#0EBE7F'}}>
              <TouchableOpacity style={styles.btnBackContainer}>
                <Entypo name="chevron-left" size={24} color="#677294" />
              </TouchableOpacity>
              <Text style={[styles.textWhite, {marginLeft: 19, fontSize: 18,}]}>Profile</Text>
            </View>
        <ScrollView>
          <View style={styles.flexColumnContainer}>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Text style={[styles.textWhite, {fontSize: 24, marginVertical: 10}]}>Set up your profile</Text>
              <Text style={[styles.textWhite, {fontSize: 14, marginVertical: 20, textAlign: 'center', fontWeight: 'normal'}]}>Update your profile so we can get a better {'\n'} impression of you.</Text>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image
                  source={require('./../../assets/update_profile.png')}
                  style={styles.profileImg}
                />
                <TouchableOpacity style={{position: 'absolute', bottom: 1, right: 1, backgroundColor: '#677294CC', borderRadius: 50, padding: 8}}>
                  <Entypo name="camera" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={[styles.headerTitle, {marginLeft: 20, fontSize: 20, marginVertical: 10}]}>Personal information</Text>
          <View style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <TextInputEditableComponent 
              placeholder="Username"
              value="Testeur test"
              onChangeText={() => {}}
              type="username"
              editable={false}
            />
            <TextInputEditableComponent 
              placeholder="Contact Number"
              value="+237 65523849489"
              onChangeText={() => {}}
              type="phone"
              editable={true}
            />
            <TextInputEditableComponent 
              placeholder="Date Birth"
              value="DD MM YYYY"
              onChangeText={() => {}}
              type="date"
              editable={true}
            />
            <TextInputEditableComponent 
              placeholder="Location"
              value="Add Details"
              onChangeText={() => {}}
              type="username"
              editable={false}
            />
            <ButtonComponent 
              textBtn={'Continue'}
              handleOnPress={() => {navigation.navigate('welcome')}}          
            />
            <View style={{width: '100%', height: 50, marginBottom: 20}}></View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}
