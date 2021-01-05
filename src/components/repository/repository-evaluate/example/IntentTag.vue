<template>
  <b-tag
    :closable="closable"
    class="intent-tag"
    size="is-medium"
    rounded
    @close="$emit('close')" >
    <div
      class="intent-tag__container">
      <div class="intent-tag__container__countStyle">{{ count }}</div> {{ entityName }}
    </div>
  </b-tag>
</template>

<script>

export default {
  name: 'IntentTag',
  props: {
    entityName: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variables.scss';
@import '~@/assets/scss/colors.scss';

    .intent-tag{
      border-radius: 0px !important;
      font-weight: none !important;
      height: 2.188rem !important;
      font-family: $font-family;

      &:hover{
        background-color: $color-primary;
        color: $color-white;

        div > div{
        background-color: $color-primary-dark;
        }
      }
        &__container{
        display: flex;
        justify-content: center;
        align-items: center;
            &__countStyle{
            font-size: 12px;
            font-weight: bold;
            border-radius: 1rem;
            min-width:  20px;
            height: 20px;
            margin-right: 0.5rem;
            padding: 0.19rem;
            color: $color-white;
            background-color: $color-grey;

            display: flex;
            justify-content: center;
            align-items: center;
            }
        }
    }
</style>
