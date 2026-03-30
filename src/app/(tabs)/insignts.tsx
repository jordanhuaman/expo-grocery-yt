import ClearCompletedButton from '@/components/insights/ClearCompletedButton'
import InsightsCategorySection from '@/components/insights/InsightsCategorySection'
import InsightsPrioritySection from '@/components/insights/InsightsPrioritySection'
import InsightsStatsSection from '@/components/insights/InsightsStatsSection'
import UserProfile from '@/components/insights/UserProfile'
import React from 'react'
import { ScrollView } from 'react-native'

const Insignts = () => {
  return (
    <ScrollView
      className='flex-1 bg-background py-4'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior='automatic'
    >
      <UserProfile />
      <InsightsStatsSection/>
      <InsightsCategorySection/>
      <InsightsPrioritySection/>
      <ClearCompletedButton/>
    </ScrollView>
  )
}

export default Insignts