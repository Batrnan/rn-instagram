import { View, Text, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ActivityRecommend = ({ data }) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(data.follow);
  const [close, setClose] = useState(false);
  return (
    <View>
      {close ? null : (
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Pressable
            onPress={() =>
              navigation.push('FriendProfile', {
                name: data.name,
                profileImage: data.profileImage,
                follow: data.follow,
                post: data.posts,
                followers: data.followers,
                following: data.following,
              })
            }
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '64%',
            }}
          >
            <Image
              source={data.profileImage}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginRight: 10,
              }}
            />
            <View style={{ width: '100%' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                {data.name}
              </Text>
              <Text style={{ fontSize: 12, opacity: 0.5 }}>
                {data.accountName}
              </Text>
              <Text style={{ fontSize: 12, opacity: 0.5 }}>
                회원님을 위한 추천
              </Text>
            </View>
          </Pressable>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {follow ? (
              <Pressable
                onPress={() => setFollow((prev) => !prev)}
                style={{ width: 90 }}
              >
                <View
                  style={{
                    width: '100%',
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: null,
                    borderWidth: 1,
                    borderColor: '#DEDEDE',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: 'black' }}>Following</Text>
                </View>
              </Pressable>
            ) : (
              <>
                <Pressable
                  onPress={() => setFollow((prev) => !prev)}
                  style={{ width: 68 }}
                >
                  <View
                    style={{
                      width: '100%',
                      height: 30,
                      borderRadius: 5,
                      backgroundColor: '#3493D9',
                      borderWidth: 0,
                      borderColor: null,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>Follow</Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => setClose(true)}
                  style={{ paddingHorizontal: 10 }}
                >
                  <AntDesign
                    name="close"
                    style={{ fontSize: 14, color: 'black', opacity: 0.8 }}
                  />
                </Pressable>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ActivityRecommend;
