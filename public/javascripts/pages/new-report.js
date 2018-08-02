/* globals $, _ */
var formFields = null

var fetchData = function () {
  $.ajax({
    url: '/reports/report-fields',
    method: 'get',
    success: function (res) {
      formFields = res
      fillFields()
    },
    error: function (err) { console.log(err) }
  })
}

var fillFields = function () {
  _.each(formFields.categories, function (category) {
    $('#category')
      .append($('<option value="' + category.name + '">' + category.name + '</option>'))
  })
  _.each(formFields.timeIntervals, function (timeInterval) {
    $('#time-interval')
      .append($('<option value="' + timeInterval.text + '">' + timeInterval.text + '</option>'))
  })
  updateFields()
}

var updateFields = function () {
  lockFields()
  var selectedCategory = $('#category').val()
  var categoryField = _.find(formFields.categories, function (category) { return category.name === selectedCategory })
  $('#location').html('')
  $('#incorrect-operation').html('')
  $('#occupational-group').html('')
  _.each(categoryField.locations, function (location) {
    $('#location')
      .append($('<option value="' + location.name + '">' + location.name + '</option>'))
  })
  _.each(categoryField.incorrectOperations, function (operation) {
    $('#incorrect-operation')
      .append($('<option value="' + operation.name + '">' + operation.name + '</option>'))
  })
  _.each(categoryField.occupationalGroups, function (occupationalGroups) {
    $('#occupational-group')
      .append($('<option value="' + occupationalGroups.name + '">' + occupationalGroups.name + '</option>'))
  })
  updateDetails()
}

var updateDetails = function () {
  lockFields()
  var selectedCategory = $('#category').val()
  var selectedOperation = $('#incorrect-operation').val()
  var categoryField = _.find(formFields.categories, function (category) { return category.name === selectedCategory })
  var incorrectOperation = _.find(categoryField.incorrectOperations, function (incorrectOperation) { return incorrectOperation.name === selectedOperation })
  $('#incorrect-operation-detail').html('')
  _.each(incorrectOperation.details, function (detail) {
    $('#incorrect-operation-detail')
      .append($('<option value="' + detail.name + '">' + detail.name + '</option>'))
  })
  unlockFields()
}

var unlockFields = function () {
  $('form select, form input, form textarea').prop('disabled', false)
}

var lockFields = function () {
  $('form select, form input, form textarea').prop('disabled', true)
}

$(function () {
  $('#category').on('change', updateFields)
  $('#incorrect-operation').on('change', updateDetails)
  fetchData()
})
