<template>
  <div>
    <v-text-field
      prepend-icon="attach_file"
      single-line
      v-model="filename"
      :label="$t(label).toUpperCase()"
      :required="required"
      @click.native="onFocus"
      :disabled="disabled"
      ref="fileTextField"
    ></v-text-field>
    <input
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      ref="fileInput"
      @change="onFileChange"
    >
  </div>
</template>

<script>
  const Uppy = require('@uppy/core');
  const XHRUpload = require('@uppy/xhr-upload');

  const uppy = Uppy().use(XHRUpload, { endpoint: 'http://localhost:4000/api/keywords/' });
</script>

<style scoped>
  input[type=file] {
    position: absolute;
    left: -99999px;
  }
</style>
