import { View, Text, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ActivityPrevious = ({ data }) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(data.follow);
  return (
    <View style={{ width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
          width: '100%',
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
            justifyContent: 'space-between',
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
          <Text style={{ fontSize: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>의 사진 및
            동영상을 보려면 팔로우 하세요.
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setFollow((prev) => !prev)}
          style={{ width: follow ? 72 : 68 }}
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
    </View>
  );
};

export default ActivityPrevious;
