import { View, Text, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const ProfileBody = ({
  name,
  profileImage,
  accountName,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {accountName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: 'black',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: 'black',
                paddingHorizontal: 5,
              }}
            />
            <Feather name="menu" style={{ fontSize: 25 }} />
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            source={profileImage}
            style={{
              resizeMode: 'cover',
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <Text style={{ paddingVertical: 5, fontWeight: 'bold' }}>{name}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{post}</Text>
          <Text>게시물</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</Text>
          <Text>팔로워</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</Text>
          <Text>팔로잉</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;
