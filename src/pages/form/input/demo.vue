<template>
  <example>
    <aqire-input
        type="number"
        maxlength="20"
        v-model="text"
        placeholder="请输入内容"/>
    <aqire-input
        type="number"
        maxlength="20"
        v-model="text"
        placeholder="请输入内容"/>
  </example>
</template>

<script lang="js">

import AqireInput from '../../../packages/input/AqireInput';
import Example from '../../../components/Example';

export default {
  name       : 'demo',
  components : {
    Example,
    AqireInput
  },
  data() {
    return {
      text : null
    };
  }
};
</script>

<style scoped lang="scss">

</style>
