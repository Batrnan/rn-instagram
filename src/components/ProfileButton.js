import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileButton = ({ id, name, accountName, profileImage }) => {
  const [follow, setFollow] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      {id === 0 ? (
        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          <Pressable
            onPress={() =>
              navigation.push('EditProfile', {
                name,
                accountName,
                profileImage,
              })
            }
            style={{ width: '100%' }}
          >
            <View
              style={{
                width: '100%',
                height: 35,
                borderColor: '#DEDEDE',
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                }}
              >
                프로필 수정
              </Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Pressable
            onPress={() => setFollow((prev) => !prev)}
            style={{ width: '42%' }}
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
          <View
            style={{
              width: '42%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Text>메시지</Text>
          </View>
          <View
            style={{
              width: '10%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Feather
              name="chevron-down"
              style={{ fontSize: 20, color: 'black' }}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileButton;
