import React from 'react';
import { Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { MailBoxIcon, DashboardIcon, CustomerQuestionIcon, BusinessManIcon, ProductsIcon, TradesIcon, SalesIcon, CheckListIcon, ShipIcon, BellIcon } from './src/assets/icons'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


import User from './src/assets/images/user.png'
import NotificationsList from './src/assets/components/NotificationsList';
import DivisionStats from './src/assets/components/DivisionStats';
import TradesOverview from './src/assets/components/TradesOverview';
import Dashboard from './src/assets/components/Dashboard';

import { setCustomText, setCustomTextInput } from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: 'Poppins',
  }
};

const customTextInputProps = {
  style: {
    fontFamily: 'Poppins',
  }
};

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);



function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerLeft: props =>
        (
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => { navigation.toggleDrawer() }}>
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
        ),
        headerRight: props =>
        (
          <View style={{ marginRight: 5, flexDirection: "row", gap: 15 }}>
            <MailBoxIcon width={20} height={20} />
            <TouchableOpacity style={{ position: "relative" }} onPress={() => { navigation.navigate('Notifications') }}>
              <BellIcon width={20} height={20} />
              <View style={{ width: 10, height: 10, backgroundColor: "#FF9C01", position: "absolute", borderRadius: 5, top: 0, right: 0 }}></View>
            </TouchableOpacity>
          </View>

        ),
      })}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsList}
        options={({ navigation }) => ({
          headerLeft: props =>
          (
            <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => { navigation.goBack() }}>
              <Icon name="chevron-back" size={30} color="#000" />
            </TouchableOpacity>
          ),
          headerRight: () => null
        })}
      />
    </Stack.Navigator>
  );
}





function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',

          flex: 0.4,
        }}>
        <Image
          source={User}
          style={{ width: 100, height: 100, borderRadius: 50 }}></Image>
        <Text style={{ paddingTop: 10, letterSpacing: 1, fontSize: 16, color: "black" }}>
          Hello !
        </Text>
        <Text style={{ paddingTop: 5, fontSize: 18, color: "black", textTransform:"uppercase" }}>
        Vishwanath
        </Text>
      </View>

      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}></View>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View style={{ padding: 10, gap: 10 }}>
          <View style={{ flexDirection: "row", gap: 10, backgroundColor: "#E2E7FF", padding: 10, borderRadius: 5 }}>
            <DashboardIcon></DashboardIcon>
            <Text style={{ color: "#2C67FF", fontWeight: "bold" }}>Dashboard</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, padding: 10, borderRadius: 5 }}>
            <CustomerQuestionIcon></CustomerQuestionIcon>
            <Text style={{ color: "#A7B3C3", fontWeight: "bold" }}>Customer Question</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, padding: 10, borderRadius: 5 }}>
            <BusinessManIcon></BusinessManIcon>
            <Text style={{ color: "#A7B3C3", fontWeight: "bold" }}>Business</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, padding: 10, borderRadius: 5 }}>
            <ProductsIcon></ProductsIcon>
            <Text style={{ color: "#A7B3C3", fontWeight: "bold" }}>Products</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, padding: 10, borderRadius: 5 }}>
            <TradesIcon></TradesIcon>
            <Text style={{ color: "#A7B3C3", fontWeight: "bold" }}>Trades</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, padding: 10, borderRadius: 5 }}>
            <SalesIcon></SalesIcon>
            <Text style={{ color: "#A7B3C3", fontWeight: "bold" }}>Sales</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, padding: 10, borderRadius: 5 }}>
            <CheckListIcon></CheckListIcon>
            <Text style={{ color: "#A7B3C3", fontWeight: "bold" }}>CheckList</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, padding: 10, borderRadius: 5 }}>
            <ShipIcon></ShipIcon>
            <Text style={{ color: "#A7B3C3", fontWeight: "bold" }}>Ship</Text>
          </View>
        </View>

      </ScrollView>

    </View>
  );
}


function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{
      header: () => null, tabBarStyle: {
        height:55,
        paddingBottom: 5
      }
    }}>
      <Tab.Screen name="Dashboard_Stack" component={DashboardStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="apps" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="DivisionStats" component={DivisionStats} options={{
        title: "Division",
        tabBarIcon: ({ color, size }) => (
          <Icon name="pie-chart" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="TradesOverview" component={TradesOverview} options={{
        title: "Trades",
        tabBarIcon: ({ color, size }) => (
          <Icon name="analytics" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Home">
    //     <Drawer.Screen options={{
    //       header: () => null,

    //     }} name="Dashboard_Drawer" component={DashboardStack} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Dashboard_Drawer">
        <Drawer.Screen options={{ header: () => null }} name="Dashboard_Drawer" component={MainTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
