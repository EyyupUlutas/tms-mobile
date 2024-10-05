import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
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
        headerLeft: props => (
          <TouchableOpacity style={styles.menuButton} onPress={() => { navigation.toggleDrawer() }}>
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>
        ),
        headerRight: props => (
          <View style={styles.headerRightContainer}>
            <MailBoxIcon width={20} height={20} />
            <TouchableOpacity style={styles.notificationButton} onPress={() => { navigation.navigate('Notifications') }}>
              <BellIcon width={20} height={20} />
              <View style={styles.notificationDot}></View>
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
          headerLeft: props => (
            <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
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
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Image
          source={User}
          style={styles.userImage}></Image>
        <Text style={styles.helloText}>
          Hello !
        </Text>
        <Text style={styles.userNameText}>
          Vishwanath
        </Text>
      </View>

      <View style={styles.divider}></View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.drawerItemsContainer}>
          <View style={styles.drawerItemActive}>
            <DashboardIcon />
            <Text style={styles.activeItemText}>Dashboard</Text>
          </View>
          <View style={styles.drawerItem}>
            <CustomerQuestionIcon />
            <Text style={styles.inactiveItemText}>Customer Question</Text>
          </View>
          <View style={styles.drawerItem}>
            <BusinessManIcon />
            <Text style={styles.inactiveItemText}>Business</Text>
          </View>
          <View style={styles.drawerItem}>
            <ProductsIcon />
            <Text style={styles.inactiveItemText}>Products</Text>
          </View>
          <View style={styles.drawerItem}>
            <TradesIcon />
            <Text style={styles.inactiveItemText}>Trades</Text>
          </View>
          <View style={styles.drawerItem}>
            <SalesIcon />
            <Text style={styles.inactiveItemText}>Sales</Text>
          </View>
          <View style={styles.drawerItem}>
            <CheckListIcon />
            <Text style={styles.inactiveItemText}>CheckList</Text>
          </View>
          <View style={styles.drawerItem}>
            <ShipIcon />
            <Text style={styles.inactiveItemText}>Ship</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{
      header: () => null, 
      tabBarStyle: styles.tabBarStyle
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
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Dashboard_Drawer">
        <Drawer.Screen options={{ header: () => null }} name="Dashboard_Drawer" component={MainTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = {
  drawerContainer: {
    flex: 1
  },
  drawerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  helloText: {
    paddingTop: 10,
    letterSpacing: 1,
    fontSize: 16,
    color: "black"
  },
  userNameText: {
    paddingTop: 5,
    fontSize: 18,
    color: "black",
    textTransform: "uppercase"
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  scrollView: {
    flex: 1
  },
  drawerItemsContainer: {
    padding: 10,
    gap: 10
  },
  drawerItemActive: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#E2E7FF",
    padding: 10,
    borderRadius: 5
  },
  activeItemText: {
    color: "#2C67FF",
    fontWeight: "bold"
  },
  drawerItem: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 5
  },
  inactiveItemText: {
    color: "#A7B3C3",
    fontWeight: "bold"
  },
  menuButton: {
    marginLeft: 5
  },
  headerRightContainer: {
    marginRight: 5,
    flexDirection: "row",
    gap: 15
  },
  notificationButton: {
    position: "relative"
  },
  notificationDot: {
    width: 10,
    height: 10,
    backgroundColor: "#FF9C01",
    position: "absolute",
    borderRadius: 5,
    top: 0,
    right: 0
  },
  backButton: {
    marginLeft: 5
  },
  tabBarStyle: {
    height: 55,
    paddingBottom: 5
  }
};
