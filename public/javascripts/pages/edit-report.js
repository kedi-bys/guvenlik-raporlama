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
  var selectedCategory = _.find(formFields.categories, function (c) { return c.name === $('#category').val() })
  var selectedLocation = $('#location').val()
  var selectedOccupationalGroup = $('#occupational-group').val()
  var selectedOperation = _.find(selectedCategory.incorrectOperations, function (i) { return i.name === $('#incorrect-operation').val() })
  var selectedOperationDetail = $('#incorrect-operation-detail').val()

  var categories = _.filter(formFields.categories, function (c) { return c.name !== selectedCategory.name })
  _.each(categories, function (c) { $('#category').append($('<option value="' + c.name + '">' + c.name + '</option>')) })

  var locations = _.filter(selectedCategory.locations, function (l) { return l !== selectedLocation })
  _.each(locations, function (l) { $('#location').append($('<option value="' + l.name + '">' + l.name + '</option>')) })

  var occupationalGroups = _.filter(selectedCategory.occupationalGroups, function (o) { return o.name !== selectedOccupationalGroup })
  _.each(occupationalGroups, function (o) { $('#occupational-group').append($('<option value="' + o.name + '">' + o.name + '</option>')) })

  var operations = _.filter(selectedCategory.incorrectOperations, function (o) { return o.name !== selectedOperation.name })
  _.each(operations, function (o) { $('#incorrect-operation').append($('<option value="' + o.name + '">' + o.name + '</option>')) })

  var operationDetails = _.filter(selectedOperation.details, function (d) { return d.name !== selectedOperationDetail })
  _.each(operationDetails, function (d) { $('#incorrect-operation-detail').append($('<option value="' + d.name + '">' + d.name + '</option>')) })

  unlockFields()
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
