<template>
  <section :style="{ paddingBottom: '44px' }">
    <FacilityLockup />
    <HospitalLookup />
    <OWALookup />
    <DoctorLookup />
    <AgentLookup />
    <CommonLookup title="CommonLookup" />
    <RaceSelect title="RaceSelect"/>
    <RaceSelectOneColumn title="RaceSelectOneColumn" />
    <RaceSelectThreeColumn title="RaceSelectThreeColumn"/>

    <!-- <ClassSuffixSelect /> -->
    <Pathologic />
    <PhysicalExam />
    <XrayScanTextArea />
    <Scopes />
    <LabTests />
    <FirstNameInput />
    <HomePhoneInput />

    <NumberInput
      label="Age at DX"
      placeholder="Your Age..."
      :max="100"
      :min="2"
    />
    <ClassSuffixInputNumber />
    <DateCompleted />
    <DateWithMacros />
    <Checkbox />
    <TypeOfInfoPending />
    <CollapseCard>
      <GroupBox title="title here">
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
      </GroupBox>
      <GroupBox title="title here">
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
        <OncoTextBox label="Last Name" />
      </GroupBox>
    </CollapseCard>
  </section>
</template>

<script lang="ts" setup>
import AgentLookup from "@/components/AgentLookup.vue";
import ClassSuffixSelect from "@/components/ClassSuffixSelect.vue";
import DoctorLookup from "@/components/DoctorLookup.vue";
import FacilityLockup from "@/components/FacilityLookup.vue";
import FirstNameInput from "@/components/FirstNameInput.vue";
import HomePhoneInput from "@/components/HomePhoneInput.vue";
import LabTests from "@/components/LabTests.vue";
import OWALookup from "@/components/OWALookup.vue";
import Pathologic from "@/components/Pathologic.vue";
import PhysicalExam from "@/components/PhysicalExam.vue";
import RaceSelect from "@/components/RaceSelect.vue";
import RaceSelectOneColumn from "@/components/RaceSelectOneColumn.vue";
import RaceSelectThreeColumn from "@/components/RaceSelectThreeColumn.vue";
// //import RemarksTextArea from "@/components/RemarksTextArea.vue";
import Scopes from "@/components/Scopes.vue";
import XrayScanTextArea from "@/components/XrayScanTextArea.vue";
import NumberInput from "@/components/NumberInput.vue";
import ClassSuffixInputNumber from "@/components/ClassSuffixInputNumber.vue";
import DateCompleted from "@/components/DateCompleted.vue";
import DateWithMacros from "@/components/DateWithMacros.vue";
import Checkbox from "@/components/Checkbox.vue";
import TypeOfInfoPending from "@/components/TypeOfInfoPending.vue";
import HospitalLookup from "@/components/HospitalLookup.vue";
import CommonLookup from "@/components/CommonLookup.vue";
import CollapseCard from "@/components/CollapseCard.vue";
import GroupBox from "@/components/GroupBox.vue";
import OncoTextBox from "@/components/OncoTextBox.vue";
</script>
