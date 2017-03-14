<template>
<p>
	Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
	computed: { // so you can use your own computed stuff
    ...mapGetters({
      counter: types.DOUBLE_COUNTER,
    })
  }
}
</script>
