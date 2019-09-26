<template>
    <vue-autosuggest
        :suggestions="[{data:['Frodo', 'Samwise', 'Gandalf', 'Galadriel', 'Faramir', 'Éowyn']}]"
        :input-props="{id:'autosuggest__input', placeholder:'Where in South Africa do you want to go?'}"
        @input="onInputChange"
        @selected="selectHandler"
        @click="clickHandler"
    >  
    <template slot-scope="{suggestion}">
        <span class="my-suggestion-item">{{suggestion.item}}</span>
    </template>
    </vue-autosuggest>
</template>

<script>

import { VueAutosuggest } from 'vue-autosuggest';

export default {
    components: {
        VueAutosuggest
    }
}

</script>