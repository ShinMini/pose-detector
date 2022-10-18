import React from 'react'
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import { Colors } from 'react-native-paper'
import Person from '../screens/Person'
import * as D from '../data'

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

export default function Content() {
  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  itemSeperator: { borderWidth: 1, borderColor: Colors.grey500 },
})
