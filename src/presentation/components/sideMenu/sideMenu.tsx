import React from "react"
import { useTheme } from "@src/presentation/hooks/useTheme"
import { View, TouchableOpacity } from "react-native"
import { createStyle } from "./styles"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type Props = {
  onHomePress: () => void
  onCalendarPress: () => void
  onPlanningPress: () => void
  onLogoutPress?: () => void
  testID?: string
}

export const SideMenu = ({
  testID,
  onCalendarPress,
  onPlanningPress,
  onHomePress,
  onLogoutPress,
}: Props) => {
  const {theme} = useTheme()
  const Styles = createStyle(theme)

  return (
    <View testID={testID} style={Styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="home" style={Styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="calendar-today" style={Styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="bar-chart" style={Styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="account-balance-wallet" style={Styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="auto-stories" style={Styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="logout" style={Styles.logoutIcon} onPress={onLogoutPress}/>
      </TouchableOpacity>
    </View>
  )

}
