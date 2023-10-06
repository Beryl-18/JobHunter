import React from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity, 
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

import { useState } from 'react'

import styles from './welcome.style'

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Beryl</Text>
        <Text style={styles.welcomeMessage}> Find your job!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            placeholder='What do you wanna search?'
            onChange={() => {}}
          /> 
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        {/* Showing job tabs */}
        <FlatList 
          data={jobTypes} 
          renderItem={({item})=>(
            <TouchableOpacity 
            style={styles.tab(activeJobType, item)} 
            onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`);
            }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome