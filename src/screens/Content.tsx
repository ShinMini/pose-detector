import React, { useMemo } from 'react'
import type { FC } from 'react'
// prettier-ignore
import { StyleSheet, SafeAreaView, View, FlatList, ScrollView, Dimensions, Text} from 'react-native'
import { Colors } from 'react-native-paper'
import PersonUsingValueState from './PersonUsingValueState'
import PersonUsingPassingState from './PersonUsingPassingState'
import PersonIcons from './PersonIcons'
import * as D from '../data'

const { width } = Dimensions.get('window')

type PersonInformation = {
  title: string
  Component: FC<any>
}
const personInformations: PersonInformation[] = [
  { title: 'PersonUsingValueState', Component: PersonUsingValueState },
  { title: 'PersonUsingPassingState', Component: PersonUsingPassingState },
]
const numberOfComponents = personInformations.length

export default function Content() {
  const people = useMemo(() => D.makeArray(10).map(D.createRandomPerson), [])
  const children = useMemo(
    () =>
      personInformations.map(({ title, Component }: PersonInformation) => (
        <View style={{ flex: 1 }} key={title}>
          <Text style={[styles.text]}>{title}</Text>
          <FlatList
            data={people}
            renderItem={({ item }) => <Component person={item} />}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        </View>
      )),
    []
  )
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalScrollView}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  itemSeperator: { borderWidth: 1, borderColor: Colors.grey500 },
  horizontalScrollView: { width: width * numberOfComponents },
  text: { fontSize: 24, textAlign: 'center' },
})
