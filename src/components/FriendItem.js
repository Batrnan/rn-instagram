import { View, Text, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const FriendItem = ({ data, name }) => {
  const [follow, setFollow] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <View>
      {data.name === name || close ? null : (
        <View
          style={{
            width: 160,
            height: 200,
            margin: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: '#DEDEDE',
            borderRadius: 2,
            position: 'relative',
          }}
        >
          <Pressable
            onPress={() => setClose(true)}
            style={{ position: 'absolute', top: 10, right: 10 }}
          >
            <AntDesign
              name="close"
              style={{ fontSize: 20, color: 'black', opacity: 0.5 }}
            />
          </Pressable>
          <Image
            source={data.profileImage}
            style={{ width: 80, height: 80, borderRadius: 100, margin: 10 }}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{data.name}</Text>
          <Text style={{ fontSize: 12 }}>{data.accountName}</Text>
          <Pressable
            onPress={() => setFollow((prev) => !prev)}
            style={{ width: '80%', paddingVertical: 10 }}
          >
            <View
              style={{
                width: '100%',
                height: 30,
                borderRadius: 5,
                backgroundColor: follow ? null : '#3493D9',
                borderWidth: follow ? 1 : 0,
                borderColor: follow ? '#DEDEDE' : null,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: follow ? 'black' : 'white' }}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default FriendItem;
