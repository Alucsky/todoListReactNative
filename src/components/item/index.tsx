import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react'

interface Props {
  title: string
  checkBox: boolean
  onRemove: () => void
  onCheck: () => void
}

export default function Item({ title, checkBox, onRemove, onCheck }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onCheck}
        style={
          checkBox ? styles.checkButtonCompletely : styles.checkButtonPending
        }
      ></TouchableOpacity>

      <Text style={styles.name}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
