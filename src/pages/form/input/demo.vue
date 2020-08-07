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
import validator from '@aqire/validator';
import { integer, maxlength, number } from '@aqire/validator/build/validates';


const v = validator(
    number( '必须是数字' ),
    maxlength( 12, '不能超过12位' ),
    integer( '必须是整数' ),
    () => new Promise( ( resolve, reject ) => reject( new Error( '不能通过' ) ) )
);

v.runAsync( '1234567890.' ).then( () => {
    console.log( true );
} ).catch( err => {
    console.error( err );
} );


export default {
    name       : 'demo',
    components : {
        Example,
        AqireInput
    },
    data() {
        return {
            text : 'v-model绑定值'
        };
    }
};
</script>

<style scoped lang="scss">

</style>
