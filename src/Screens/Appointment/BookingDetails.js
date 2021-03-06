import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';

const BookingDetail = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#B2EA70',
          margin: 5,
          borderRadius: 10,
        }}>
        <TouchableOpacity style={{marginHorizontal: 20, marginVertical: 20}}>
          <Ionicons name="arrow-back" size={40} color="#000" />
        </TouchableOpacity>
        <View>
          <Ionicons
            name="ios-checkmark-circle"
            size={200}
            color="green"
            style={{textAlign: 'center'}}
          />
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '700'}}>
            Your Appointment Booked
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff', paddingVertical: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/images/Dr1.jpg')}
            />
          </View>
          <View>
            <Text style={{color: '#000', fontSize: 22, fontWeight:'600'}}>Dr Zakaria Younus</Text>
            <Text style={{color: '#000', fontSize: 18,}}>Cardiologist</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Material name="edit" size={30} color="#000" />
            <Text style={{color: 'black', fontSize: 16}}>Edit</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Material name="delete" size={30} color="#000" />
            <Text style={{color: 'black', fontSize: 16}}>Delete</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#DDDDDD',padding: 15,marginVertical: 30, }}>
            <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems: 'center', }}> 
                <Ionicons name="calendar-outline" size={50} color='green'/>
                <Text style={{color:'#000',marginLeft: 10, fontSize: 16}}>Time & Date</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: '#000', fontSize: 16}}>04-March-2022</Text>
                    <Text style={{color: '#000', fontSize: 20, fontWeight: '700'}}>09:30AM</Text>
                </View>
            </View>
        </View>
        <View>
            <Text style={{color: '#000', textAlign: 'center',fontSize: 20, fontWeight: '700'}}>106, Medlicott road, Birmingham, England</Text>
        </View>
      </View>
    </View>
  );
};

export default BookingDetail;
