var search_texts = "";
var ship_add = "2";
var due_date_interval = 29;
var decimal_point = "2";
var original_rate = "";
var auto_id = 2;
var unsaved_item = 0;
var block_inv = 0;
var auto_add = 0;
var item_count = 0;
var item_fetch_count = 0;
var gst_type = 0;
var search_text;
var stop_bill_addr = 0;
var stop_ship_addr = 0;
var branch_count = 0;
var charge_value = 0;
var auto_add_charge = 0;
var charge_type_found = 0;
var busi_type = 1;
var serial_force = 0;
var user_level=0;
var split_inner_id = 2;
var split_total_amt = 0;
var customer_info_data = [];
var items_fetch_data = [];
var business_branch_data = [];
var t = 'invoice';
var currency_rates = {'INR':1};
var inv_data = {
  'bid': 0,
  'operation': 'create-invoice',
  'invoice': [{
    "id": 0,
    "inv_number": "",
    "inv_date": "",
    "inv_due_date": "",
    "ref_type": "",
    "ref_number": "",
    "veh_no": "",
    "despatched_by": "",
    "cust_id": 0,
    "gst_type": 0,
    "cust_name": "",
    "cust_pos": "",
    "cust_gstin": "",
    "busi_branch_id": 0,
    "busi_name": "",
    "busi_addr1": "",
    "busi_addr2": "",
    "busi_city": "",
    "busi_pincode": "",
    "busi_state": "",
    "busi_country": "",
    "busi_gstin": "",
    "bill_company": "",
    "bill_addr1": "",
    "bill_addr2": "",
    "bill_city": "",
    "bill_pincode": "",
    "bill_state": "",
    "bill_country": "",
    "ship_company": "",
    "ship_addr1": "",
    "ship_addr2": "",
    "ship_city": "",
    "ship_pincode": "",
    "ship_state": "",
    "ship_country": "",
    "reverse_charge": 0,
    "export_type": 0,
    "export_lut": 0,
    "export_bill_no": "",
    "export_port_code": "",
    "export_bill_date": "",
    "special_supply": 0,
    "ecomm_status": 0,
    "ecomm_operator": 0,
    "filing_status": 0,
    "cancel_status": 0,
    "delete_status": 0,
    "amend_inv_id": 0,
    "revised_inv_id": 0,
    "notes": "",
    "terms_conditions": "",
    "num_items": 0,
    "total_non_taxable_amt": 0,
    "total_taxable_amt": "",
    "total_cgst_amt": "",
    "total_sgst_amt": "",
    "total_igst_amt": "",
    "total_adjust_amt": 0,
    "total_addvalue_amt": 0,
    "total_cess_amt": "",
    "total_amt": "",
    "ip_address": "0.0.0.0",
    "sales_by": '',
    "added_on": "0",
    "added_by": 0,
    "updated_on": "",
    "updated_by": 0,
    "data_source": 0,
    "status": 0,
    "items": [],
    "others": [],
    "auto_num": "",
    "auto_mode": 1,
    "cust_business_name": "",
    "bank_account": "",
    'currency': 'INR',
    "currency_rate" : 1
  }]
};
var split_data = [{
  "id": 1,
  "active": 1,
  "amt": 0,
  "pay_status": 0,
  "date": today_date,
  "name": "",
  "email": ""
}, {
  "id": 2,
  "active": 1,
  "amt": 0,
  "pay_status": 0,
  "date": today_date,
  "name": "",
  "email": ""
}, {
  "id": 3,
  "active": 1,
  "amt": 0,
  "pay_status": 0,
  "date": today_date,
  "name": "",
  "email": ""
}];
var state_code = {
  "35": "Andaman and Nicobar Islands",
  "37": "Andhra Pradesh",
  "12": "Arunachal Pradesh",
  "18": "Assam",
  "10": "Bihar",
  "04": "Chandigarh",
  "22": "Chhattisgarh",
  "26": "Dadra and Nagar Haveli",
  "25": "Daman and Diu",
  "07": "Delhi",
  "30": "Goa",
  "24": "Gujarat",
  "06": "Haryana",
  "02": "Himachal Pradesh",
  "01": "Jammu and Kashmir",
  "20": "Jharkhand",
  "29": "Karnataka",
  "32": "Kerala",
  "31": "Lakshadweep",
  "23": "Madhya Pradesh",
  "27": "Maharashtra",
  "14": "Manipur",
  "17": "Meghalaya",
  "15": "Mizoram",
  "13": "Nagaland",
  "21": "Odisha",
  "97": "Other Territory",
  "34": "Puducherry",
  "03": "Punjab",
  "08": "Rajasthan",
  "11": "Sikkim",
  "33": "Tamil Nadu",
  "36": "Telangana",
  "16": "Tripura",
  "09": "Uttar Pradesh",
  "05": "Uttarakhand",
  "19": "West Bengal"
};

var busi_data=[];
var hide_non_tax = 1;
var other_than_gst = {}
var item_other_than_gst;
var nill_rate = {};
var item_nill_rate;
var date = new Date();
var day = ("0" + date.getDate()).slice(-2);
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var year = date.getFullYear();
var today_date = year + "-" + month + "-" + day; //14-05-2018
var priorDate = new Date().setDate(date.getDate() + due_date_interval);
var priorDate_1 = new Date(priorDate);
var inv_date1 = today_date.split("-");
var inv_date_v = inv_date1[2] + "-" + inv_date1[1] + "-" + inv_date1[0];
inv_data['invoice'][0]['inv_date'] = today_date;
var inv_number =  url_param('inv_number');
var est_number =  url_param('est_number');
var bill_number =  url_param('bill_number');
var dc_number =  url_param('dc_number');
var cust_id = url_param('cust_id');
var operation = url_param('operation');

$('.inv_date,.pay_due_date, .split_pay_date, .ship_bill_date').datepicker({
  format: 'dd-mm-yyyy',
  autoclose: true,
  orientation: "bottom left"
});

function numberOnly(id) {
  var element = document.getElementById(id);
  element.value = element.value.replace(/[^0-9]/gi, "");
}

function url_param(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

function parse_float_2(num_0) {
  if (num_0 == '' || isNaN(num_0)) {
    var num_2 = parseFloat(0);
  } else {
    var num_1 = parseFloat(num_0).toFixed(decimal_point);
    var num_2 = parseFloat(num_1);
  }
  return num_2;
}

function final_charges_alter() {

  total_cgst_amt = 0;
  total_sgst_amt = 0;
  total_igst_amt = 0;
  total_cess_amt = 0;
  total_taxable_amt = 0;
  total_non_taxable_amt = 0;
  total_adjust_amt = 0;
  total_addvalue_amt = 0;
  total_amt = 0;

  for (var y = 0; y < inv_data['invoice'][0]['items'].length; y++) {
    if(inv_data['invoice'][0]['currency'] == 'INR') {
      total_cgst_amt = total_cgst_amt + parseFloat(inv_data['invoice'][0]['items'][y]['cgst_amt']);
      total_sgst_amt = total_sgst_amt + parseFloat(inv_data['invoice'][0]['items'][y]['sgst_amt']);
      total_igst_amt = total_igst_amt + parse_float_2(inv_data['invoice'][0]['items'][y]['igst_amt']);
      total_cess_amt = total_cess_amt + parse_float_2(inv_data['invoice'][0]['items'][y]['cess_amt']);
      total_taxable_amt = total_taxable_amt + parse_float_2(inv_data['invoice'][0]['items'][y]['taxable_amt']);
      total_non_taxable_amt = total_non_taxable_amt + parse_float_2(inv_data['invoice'][0]['items'][y]['non_taxable_amt']);
    } else {
      let other_currency = parseFloat(currency_rates[inv_data['invoice'][0]['currency']]);
      let rate      = $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_sno').attr('item_rate_inr');
      let tax       = $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_sno').attr('item_taxable_inr');
      let non_tax   = $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_sno').attr('item_nontax_inr');
      let quantity  = $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_qty').val();
      let discount  = $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_disc').val();
      let single_non_tax_amt = parse_float_2((quantity * non_tax * other_currency)/quantity);

      if(discount){
        if (discount.match('%')) {
          disc_per = discount.split('%');
          disc_amt = (((((rate*other_currency) - single_non_tax_amt) * disc_per[0]) / 100) * quantity);
        } else {
          disc_amt = parse_float_2(discount);
        }
      }else{
        disc_amt = 0;
      }

      total_taxable_amt     = total_taxable_amt     + parse_float_2(((quantity * tax)* other_currency) - disc_amt);
      total_non_taxable_amt = total_non_taxable_amt + parse_float_2(quantity * non_tax * other_currency);

      inv_data['invoice'][0]['items'][y]['rate'] = parse_float_2(rate * other_currency)
      inv_data['invoice'][0]['items'][y]['taxable_amt'] = parse_float_2(((quantity * tax)* other_currency) - disc_amt);
      inv_data['invoice'][0]['items'][y]['non_taxable_amt'] = parse_float_2(quantity * non_tax * other_currency);
      inv_data['invoice'][0]['items'][y]['quantity'] = quantity;
      inv_data['invoice'][0]['items'][y]['discount'] = discount;
      inv_data['invoice'][0]['items'][y]['item_total_amt'] = parse_float_2(inv_data['invoice'][0]['items'][y]['taxable_amt'] + inv_data['invoice'][0]['items'][y]['non_taxable_amt']);
      
      $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_rate').val(inv_data['invoice'][0]['items'][y]['rate']);
      $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_rate_qty').val(parse_float_2(inv_data['invoice'][0]['items'][y]['rate']*inv_data['invoice'][0]['items'][y]['quantity']));
      $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_taxable').val(inv_data['invoice'][0]['items'][y]['taxable_amt']);
      $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_non_taxable').val(inv_data['invoice'][0]['items'][y]['non_taxable_amt']);
      $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_non_taxable').attr('single_non_tax', inv_data['invoice'][0]['items'][y]['non_taxable_amt'] / inv_data['invoice'][0]['items'][y]['quantity']);
      $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_total').val(inv_data['invoice'][0]['items'][y]['item_total_amt']);
    }
  }

  var total_adjust_amt = parse_float_2($('#final_adjust_amt').val());
  for (var a = 0; a < inv_data['invoice'][0]['others'].length; a++) {
    total_addvalue_amt = total_addvalue_amt + parse_float_2(inv_data['invoice'][0]['others'][a]['charge_value']);
    inv_data['invoice'][0]['total_addvalue_amt'] = total_addvalue_amt;
  }

  total_amt = total_amt + parse_float_2(total_cgst_amt + total_sgst_amt + total_igst_amt + total_cess_amt + total_non_taxable_amt + total_taxable_amt + total_adjust_amt + total_addvalue_amt);
  if (total_amt < 0) {
    toastr.error('Total cannot be negative');
  }
  if(total_taxable_amt) {
    $('#final_taxable_amt_row').show()
    $('#final_taxable_amt').html(parse_float_2(total_taxable_amt));
  } else {
    $('#final_taxable_amt_row').hide()
  }
  if(total_non_taxable_amt) {
    $('#final_non_taxable_amt_row').show()
    $('#final_non_taxable_amt').html(parse_float_2(total_non_taxable_amt));
  } else {
    $('#final_non_taxable_amt_row').hide()
  }
  if(total_cgst_amt) {
    $('#final_cgst_amt_row').show()
    $('#final_cgst_amt').html(parse_float_2(total_cgst_amt + total_sgst_amt));
  } else {
    $('#final_cgst_amt_row').hide()
  }
  if(total_igst_amt) {
    $('#final_igst_amt_row').show()
    $('#final_igst_amt').html(parse_float_2(total_igst_amt));
  } else {
    $('#final_igst_amt_row').hide()
  }
  if(total_cess_amt) {
    $('#final_cess_amt_row').show()
    $('#final_cess_amt').html(parse_float_2(total_cess_amt));
  } else {
    $('#final_cess_amt_row').hide()
  }
  if((user_level != 1 || user_level != 2) && total_adjust_amt > 100 && total_adjust_amt < -100) {
    total_adjust_amt="";
    alert("Adjustment Range Between is -100 to 100");
  }
  
  $('#final_adjust_amt').val(parse_float_2(total_adjust_amt));
  $('#final_total_amt , .inv_total_widget').html(parse_float_2(total_amt));
  $('#split_total_amt').html(parse_float_2(total_amt));
  inv_data['invoice'][0]['total_taxable_amt'] = parse_float_2(total_taxable_amt);
  inv_data['invoice'][0]['total_non_taxable_amt'] = parse_float_2(total_non_taxable_amt);
  inv_data['invoice'][0]['total_igst_amt'] = parse_float_2(total_igst_amt);
  inv_data['invoice'][0]['total_cgst_amt'] = (total_cgst_amt);
  inv_data['invoice'][0]['total_sgst_amt'] = (total_sgst_amt);
  inv_data['invoice'][0]['total_cess_amt'] = parse_float_2(total_cess_amt);
  inv_data['invoice'][0]['total_adjust_amt'] = parse_float_2(total_adjust_amt);
  inv_data['invoice'][0]['total_amt'] = parse_float_2(total_amt);

}

function data_alter(data) {
  if (data['invoice'][0]['inv_number'] != '') {
    $('.inv_no').val(data['invoice'][0]['inv_number']);
  }

  var inv_date1 = data['invoice'][0]['inv_date'].split("-");
  var inv_due_date1 = data['invoice'][0]['inv_due_date'].split("-");

  var inv_date_v = inv_date1[2] + "-" + inv_date1[1] + "-" + inv_date1[0];
  var inv_due_date_v = inv_due_date1[2] + "-" + inv_due_date1[1] + "-" + inv_due_date1[0];
  
  if(operation!="create-credit-note"){
    $('.inv_date').datepicker("update", inv_date_v);
    $('.pay_due_date').datepicker("update", inv_due_date_v);
  }

  
  $('#seller_name').html(data['invoice'][0]['busi_name'])
  $('#seller_names').html(data['invoice'][0]['busi_name'])
  $('#seller_add_1').html(data['invoice'][0]['busi_addr1'])
  $('#seller_add_2').html(data['invoice'][0]['busi_addr2'])
  $('#seller_city').html(data['invoice'][0]['busi_city'])
  $('#seller_pincode').html(data['invoice'][0]['busi_pincode'])
  $('#seller_state').html(data['invoice'][0]['busi_state'])
  $('#seller_country').html(data['invoice'][0]['busi_country'])

  if (data['invoice'][0]['busi_gstin'] != '') {
    $("#seller_gst_div").show();
    $("#seller_gst").html(data['invoice'][0]['busi_gstin']);
  } else {
    $("#seller_gst").html('');
    $("#seller_gst_div").hide();
  }
  $("#seller_gst").html(data['invoice'][0]['busi_gstin'])

  if (data['operation'] == 'edit-invoice' || data['operation'] == 'edit-export-invoice' || data['operation'] == 'edit-estimate' || data['operation'] == 'edit-bill' || data['operation'] == 'edit-dc' || data['operation'] == 'convert-invoice' || data['operation'] == 'copy-invoice') {
    $('#cust_det_div, #cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
  }
  
  if (data['invoice'][0]['cust_business_name'] != '' && data['invoice'][0]['cust_business_name']) {
    $('#customer_business_name').html(data['invoice'][0]['cust_business_name']).css('color', '#428bca');  
  } else {
    $('#customer_business_name').html('Business Name').css('color', '#B14');
  }

  if (data['invoice'][0]['cust_name'] != '') {
    $('#customer_name').html(data['invoice'][0]['cust_name']).css('color', '#428bca');
  } else if (data['invoice'][0]['cust_name'] == data['invoice'][0]['cust_business_name']) {
  } else {
    $('#customer_name').html("Customer Name").css('color', '#B14');
  }

  if (data['invoice'][0]['bill_company'] != '') {
    $('#bill_name').html(data['invoice'][0]['bill_company']).css('color', '#428bca');
  } else {
    $('#bill_name').html('Company').css('color', '#B14');
  }

  if (data['invoice'][0]['bill_addr1'] != '') {
    $('#bill_add_1').html(data['invoice'][0]['bill_addr1']).css('color', '#428bca');
  } else {
    $('#bill_add_1').html('Address Line 1').css('color', '#B14');
  }

  if (data['invoice'][0]['bill_addr2'] != '') {
    $('#bill_add_2').html(data['invoice'][0]['bill_addr2']).css('color', '#428bca');
  } else {
    $('#bill_add_2').html('Address Line 2').css('color', '#B14');
  }

  if (data['invoice'][0]['bill_city'] != '') {
    $('#bill_city').html(data['invoice'][0]['bill_city']).css('color', '#428bca');
  } else {
    $('#bill_city').html('City').css('color', '#B14');
  }

  if (data['invoice'][0]['bill_pincode'] != '') {
    $('#bill_pin').html(data['invoice'][0]['bill_pincode']).css('color', '#428bca');
  } else {
    $('#bill_pin').html('Pincode').css('color', '#B14');
  }

  if (data['invoice'][0]['ship_pincode'] != '') {
    $('#ship_pin').html(data['invoice'][0]['ship_pincode']).css('color', '#428bca');
  } else {
    $('#ship_pin').html('Pincode').css('color', '#B14');
  }
  
  if (data['invoice'][0]['bill_country'] != '') {
    $('#bill_country').html(data['invoice'][0]['bill_country']).css('color', '#428bca');
  } else {
    $('#bill_country').html('Country').css('color', '#B14');
  }

  if (data['invoice'][0]['bill_state'] != '') {
    $('#bill_state').html(data['invoice'][0]['bill_state']).css('color', '#428bca');
  } else {
    $('#bill_state').html('State').css('color', '#B14');
  }

  if (data['invoice'][0]['ship_company'] != '') {
    $('#ship_name').html(data['invoice'][0]['ship_company']).css('color', '#428bca');
  } else {
    $('#ship_name').html('Company').css('color', '#B14');
  }

  if (data['invoice'][0]['ship_addr1'] != '') {
    $('#ship_add_1').html(data['invoice'][0]['ship_addr1']).css('color', '#428bca');
  } else {
    $('#ship_add_1').html('Address Line 1').css('color', '#B14');
  }

  if (data['invoice'][0]['ship_addr2'] != '') {
    $('#ship_add_2').html(data['invoice'][0]['ship_addr2']).css('color', '#428bca');
  } else {
    $('#ship_add_2').html('Address Line 2').css('color', '#B14');
  }

  if (data['invoice'][0]['ship_city'] != '') {
    $('#ship_city').html(data['invoice'][0]['ship_city']).css('color', '#428bca');
  } else {
    $('#ship_city').html('City').css('color', '#B14');
  }

  if (data['invoice'][0]['ship_country'] != '') {
    $('#ship_country').html(data['invoice'][0]['ship_country']).css('color', '#428bca');
  } else {
    $('#ship_country').html('Country').css('color', '#B14');
  }

  if (data['invoice'][0]['ship_state'] != '') {
    $('#ship_state').html(data['invoice'][0]['ship_state']).css('color', '#428bca');
  } else {
    $('#ship_state').html('State').css('color', '#B14');
  }

  if (data['invoice'][0]['cust_gstin'] != '') {
    $('#cust_gst_text').html("GSTIN: ").css('color', '#428bca');
    $('#cust_gst').html(data['invoice'][0]['cust_gstin']).css('color', '#428bca');
  } else {
    $('#cust_gst').html('Update GSTIN').css('color', '#B14');
  }

  if (data['invoice'][0]['cust_pos'] != '') {
    $('#pos_name').html(data['invoice'][0]['cust_pos']).css('color', '#428bca');
    $('#pos_name_edit').val(data['invoice'][0]['cust_pos']);
  } else {
    $('#pos_name').html('Place of Supply').css('color', '#B14');
  }

}

function pincode_api(pincode) {
  var loc_details;
  $.ajax({
    type: "POST",
    url: Ledgers.API + "helper/helper",
    dataType: "JSON",
    async: false,
    data: {
      'listing': 'pincode',
      'pincode': pincode
    },
    success: function (loc_data) {
      loc_details = loc_data;
    }
  });
  if (loc_details['status'] == 1) {
    return loc_details;
  } else {
    loc_details = 4;
    return loc_details;
  }
}

function convert_base_INR(){
  $.each(currency_rates, function(key,value){
    if(key != 'INR') {
      currency_rates[key] = currency_rates[key]/currency_rates.INR;
    }
  })
  currency_rates.INR = 1;
}

function gst_validate(gstin) {
  if (gstin != '') {
    $.ajax({
      type: "POST",
      url: "/m/api/invoice/invoice-helper-service-api",
      dataType: "JSON",
      data: {
        "operation": "check-gstin",
        "gstin": gstin
      },
      success: function (data) {
        if (data['status'] == 1) {
          
          if (data['data']['tradeNam']) {
            $("#address_edit_model input[id='cust_busi_name_edit']").val(data['data']['tradeNam']);
          } else if (data['data']['lgnm']) {
            $("#address_edit_model input[id='cust_busi_name_edit']").val(data['data']['lgnm']);
          }
          if (data['data']['pradr']['addr']["st"]) {
            $("#address_edit_model input[id='bill_add_1_edit']").val((data['data']['pradr']['addr']["st"]).toUpperCase());
            if($("#basic_settings_edit_model input[id='address1']").val()==""){
              $("#basic_settings_edit_model input[id='address1']").val((data['data']['pradr']['addr']["st"]).toUpperCase());
            }
          }
          if (data['data']['pradr']['addr']["loc"]) {
            $("#address_edit_model input[id='bill_add_2_edit']").val((data['data']['pradr']['addr']["loc"]).toUpperCase());
            if($("#basic_settings_edit_model input[id='address2']").val()==""){
              $("#basic_settings_edit_model input[id='address2']").val((data['data']['pradr']['addr']["loc"]).toUpperCase());
            }
          }
          if (data['data']['pradr']['addr']["dst"]) {
            $("#address_edit_model input[id='bill_city_edit']").val((data['data']['pradr']['addr']["dst"]).toUpperCase());
            if($("#basic_settings_edit_model input[id='city']").val()==""){
              $("#basic_settings_edit_model input[id='city']").val((data['data']['pradr']['addr']["dst"]).toUpperCase());
            }
          } else if (data['data']['stj']) {
            $("#address_edit_model input[id='bill_city_edit']").val((data['data']['stj']).toUpperCase());
            if($("#basic_settings_edit_model input[id='city']").val()==""){
              $("#basic_settings_edit_model input[id='city']").val((data['data']['stj']).toUpperCase());
            }
          }
          if (data['data']['pradr']['addr']["pncd"]) {
            $("#address_edit_model input[id='bill_pin_edit']").val(data['data']['pradr']['addr']["pncd"]);
            if($("#basic_settings_edit_model input[id='pincode']").val()==""){
              $("#basic_settings_edit_model input[id='pincode']").val(data['data']['pradr']['addr']["pncd"]);
            }
          }
          if (data['data']['pradr']['addr']["stcd"]) {
            $("#address_edit_model select[id='bill_state_edit']").val((data['data']['pradr']['addr']["stcd"]).toUpperCase()).trigger('change');
            $("#address_edit_model select[id='bill_country_edit']").val("INDIA").trigger('change');
            $("#pos_name_edit").val((data['data']['pradr']['addr']["stcd"]).toUpperCase());

            if($("#basic_settings_edit_model input[id='state']").val()==""){
              $("#basic_settings_edit_model input[id='state']").val((data['data']['pradr']['addr']["stcd"]).toUpperCase()).trigger('change');
            }
            if($("#basic_settings_edit_model input[id='country']").val()==""){
              $("#basic_settings_edit_model input[id='country']").val("INDIA").trigger('change');
            }
          }
          toastr.success('Valid GSTIN')
        } else {
          $("#basic_settings_edit_model input[id='gstin']").val("");
          $("#address_edit_model input[id='cust_gst_edit']").val("");
          toastr.warning('Invalid GSTIN');
        }
        return (data['status']);
      },
      error: function (data) {
        toastr.warning('Connection Error')
      }
    });
  } else {
    toastr.warning('Empty GSTIN')
    return 0;
  }

}

function string_preg(str) {
  return str.replace(/\s\s+/g, ' ');
}

function gst_alter() {
  var temp=0;
  if ($("#reverse_charge").val() == 0) {
    if ($("#export_bond_status").val() == 0) {
      if ($('#pos_name').html() == $('#seller_state').html()) {
        inv_data['invoice'][0]['gst_type'] = 1;
        gst_type = 1;
      } else if ($('#pos_name').html() != $('#seller_state').html()) {
        inv_data['invoice'][0]['gst_type'] = 2;
        gst_type = 2;
      }
    }
  }
  zero_supply_type = $("#zero_rated").val();
  if (zero_supply_type == 3) {
    inv_data['invoice'][0]['gst_type'] = 2;
    gst_type = 2;
  }
  if ($("#pos_name").html() == 'Place of Supply' || $("#seller_gst").html() == '' || $("#reverse_charge").val() == 1 || $("#export_bond_status").val() == 1 || $('#special_supply').val() == '1') {
    gst_type = 0;
    inv_data['invoice'][0]['gst_type'] = 0;
  }

  if (operation == 'create-bill-of-supply' || operation == 'create-bill' || operation == 'edit-bill') {
    gst_type = 0;
    inv_data['invoice'][0]['gst_type'] = 0;
  }

  if (gst_type == 0) {
    $('.item_cgst_amt , .item_cgst_per  , .item_sgst_amt , .item_sgst_per  , .item_igst_amt , .item_igst_per').val(0);
    $('.cgst , .sgst , .igst, .gst, #gst_headtext').hide();
  } else if (gst_type == 1) {
    $('.item_igst_amt').val(0);
    $(".gst,.gst_text, #gst_headtext").show();
  } else if (gst_type == 2) {
    $('.item_cgst_amt , .item_sgst_per').val(0);
    $(".gst,.gst_text, #gst_headtext").show();
  }

  for (i = 0; i < item_count; i++) {
    if ($("#special_supply").val() == 3) {
      inv_data['invoice'][0]['items'][i]['gst_rate'] = 0.1;
    } else {
      inv_data['invoice'][0]['items'][i]['gst_rate'] = $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_gst_rate');
    }
    gst_rate = inv_data['invoice'][0]['items'][i]['gst_rate'];
    taxable_amt = parse_float_2(inv_data['invoice'][0]['items'][i]['taxable_amt']);
    non_taxable_amt = parse_float_2(inv_data['invoice'][0]['items'][i]['non_taxable_amt']);
    gst_rate_local = parseFloat(gst_rate / 2).toFixed(2);
    gst_amt = parse_float_2(taxable_amt * ((gst_rate) / 100));
    if (gst_type == 0) {
      $(this).closest('tr').find('.item_type_span').hide();
      gst_amt = 0;
      inv_data['invoice'][0]['items'][i]['cgst_rate'] = 0;
      inv_data['invoice'][0]['items'][i]['sgst_rate'] = 0;
      inv_data['invoice'][0]['items'][i]['igst_rate'] = 0;
      inv_data['invoice'][0]['items'][i]['cgst_amt'] = 0;
      inv_data['invoice'][0]['items'][i]['sgst_amt'] = 0;
      inv_data['invoice'][0]['items'][i]['igst_amt'] = 0;
      inv_data['invoice'][0]['items'][i]['cess_amt'] = 0;
    } else if (gst_type == 1) {
      $(this).closest('tr').find('.item_type_span').show();
      
      // Hide If item_code is empty
      if (inv_data['invoice'][0]['items'][i]['item_code'] == '') {
        $(this).closest('tr').find('.item_hsn').hide()
        $(this).closest('tr').find('.item_type').hide()
        $(this).closest('tr').find('.item_type_span').hide();
      } else {
        $(this).closest('tr').find('.item_type_span').show();
        $(this).closest('tr').find('.item_hsn').show()
        $(this).closest('tr').find('.item_type').show()
      }
      gst_rate_local = parseFloat(gst_rate / 2).toFixed(2);
      inv_data['invoice'][0]['items'][i]['cgst_rate'] = gst_rate_local;
      inv_data['invoice'][0]['items'][i]['sgst_rate'] = gst_rate_local;
      inv_data['invoice'][0]['items'][i]['igst_rate'] = 0;
      inv_data['invoice'][0]['items'][i]['cgst_amt'] = taxable_amt * (gst_rate_local / 100);
      inv_data['invoice'][0]['items'][i]['sgst_amt'] = taxable_amt * (gst_rate_local / 100);
      inv_data['invoice'][0]['items'][i]['igst_amt'] = 0;
    } else if (gst_type == 2) {
      $(this).closest('tr').find('.item_type_span').show();
      
      // Hide If item_code is empty
      if (inv_data['invoice'][0]['items']['item_code'] == '') {
        $(this).closest('tr').find('.item_hsn').hide()
        $(this).closest('tr').find('.item_type').hide()
        $(this).closest('tr').find('.item_type_span').hide();
      } else {
        $(this).closest('tr').find('.item_type_span').show();
        $(this).closest('tr').find('.item_hsn').show()
        $(this).closest('tr').find('.item_type').show()
      }
      inv_data['invoice'][0]['items'][i]['cgst_rate'] = 0;
      inv_data['invoice'][0]['items'][i]['sgst_rate'] = 0;
      inv_data['invoice'][0]['items'][i]['igst_rate'] = gst_rate;
      inv_data['invoice'][0]['items'][i]['sgst_amt'] = 0;
      inv_data['invoice'][0]['items'][i]['cgst_amt'] = 0;
      inv_data['invoice'][0]['items'][i]['igst_amt'] = taxable_amt * (gst_rate / 100);
    }
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_total').val(parse_float_2(gst_amt+taxable_amt+non_taxable_amt));
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_gst_amt').val(gst_amt);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.gst_per_rate').html(gst_rate + "%");
    // $('[item-id="' + i + '"] .item_total_amt').html(parse_float_2(gst_amt+taxable_amt+non_taxable_amt));
    // $('[item-id="' + i + '"] .item_gst_amt').html(gst_amt);
    
    if(!inv_data['invoice'][0]['items'][i]['item_code'] && inv_data['invoice'][0]['items'][i]['item_code']==""){
      $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type_span').hide();
    }
    temp=i+1;
  }
  // To Hide Last row gst rate and SAC or HSN Code Using temp variable
  $('#item_master_table_body tr:nth-child('+ (temp+1) +')').find('.gst_text').hide();
  $('#item_master_table_body tr:nth-child('+ (temp+1) +')').find('.item_type_span').hide();
}

function preload_documnets() {

  // bank list
  $.ajax({
    type: "POST",
    url: Ledgers.API + "helper/helper",
    dataType: "JSON",
    data: {
      listing: 'state_country_payment'
    },
    async: false,
    success: function (state_country) {
      var state_country_data = state_country;
      for (var i = 0; i < (state_country_data['state'].length); i++) {
        $(".state-list").append('<option>' + state_country_data['state'][i]['state'] + '</option>');
      }
      
      for (var i = 0; i < (state_country_data['country'].length); i++) {
        $(".country-list").append('<option>' + state_country_data['country'][i]['country'] + '</option>');
      }
      $(".state-list, .country-list").select2()
    }
  });

  //additional changres
  $.ajax({
    type: "POST",
    url: Ledgers.API + "invoice/invoice-helper-service-api",
    dataType: "JSON",
    data: {
      'token': 'session',
      'operation': 'additional_charges',
    },
    async: false,
    success: function (data) {
      if (data['status'] == 1) {
        for (i = 0; i < data['additional_charges'].length; i++) {
          $("#additional_charges").append('<option value="' + data['additional_charges'][i]['charge_type'] + '">' + data['additional_charges'][i]['charge_type'] + '</option>');
        }
      }
    }
  });

  //log_pos
  $.ajax({
    type: "POST",
    url: Ledgers.API + "business/helper-service",
    dataType: "JSON",
    data: {
      'operation': 'logo_pos'
    },
    success: function (logo) {
      if (logo['logo_url'] != '') {
        $('#head_logo').attr('src', logo['logo_url'])
      }
      if (logo['logo_pos'] == 'left') {
        $('#head_logo').css('float', 'left');
      } else if (logo['logo_pos'] == 'center') {
        $('#head_logo').css({
          'display': 'block',
          'margin': 'auto'
        });
      } else if (logo['logo_pos'] == 'right') {
        $('#head_logo').css('float', 'right');
        logo_style_class = "style=float:right;";
      } else if (logo['logo_pos'] == 'hide') {
        $('#head_logo , #logo_line').css('display', 'none');

      }

    }
  });

  // START Branch List operations
  $.ajax({
    type: "POST",
    dataType: "JSON",
    url: Ledgers.API + "helper/helper",
    data: {
      listing: 'business_branch'
    },
    async: false,
    success: function (business_branch) {
      business_branch_data = business_branch;
      inv_data['invoice'][0]['busi_branch_id'] = business_branch_data['branch'][0]['id'];
      inv_data['invoice'][0]['busi_name'] = business_branch_data['branch'][0]['branch_name'];
      inv_data['invoice'][0]['busi_gstin'] = business_branch_data['branch'][0]['gstin'];
      inv_data['invoice'][0]['busi_addr1'] = business_branch_data['branch'][0]['addr1'];
      inv_data['invoice'][0]['busi_addr2'] = business_branch_data['branch'][0]['addr2'];
      inv_data['invoice'][0]['busi_state'] = business_branch_data['branch'][0]['state'];
      inv_data['invoice'][0]['busi_city'] = business_branch_data['branch'][0]['city'];
      inv_data['invoice'][0]['busi_pincode'] = business_branch_data['branch'][0]['pincode'];
      inv_data['invoice'][0]['busi_country'] = business_branch_data['branch'][0]['country'];
      data_alter(inv_data);
      for (var i = 1; i < business_branch_data['branch'].length; i++) {
        branch_count++;
        if (business_branch_data['branch'][i]['status'] == 1)
          $("#branch_list").append('<option value="' + i + '" busi_branch_id="' + inv_data['invoice'][0]['busi_branch_id'] + '">' + business_branch_data['branch'][i]['branch_name'] + '</option>');
      }
      if (branch_count < 2) {
        $("#branch_list").hide();
      }
      // $('#branch_list').select2();
      $('#username').val(Ledgers.user.username);
      inv_data['invoice'][0]['added_by'] = Ledgers.user.gid;
    }
  });

  $.ajax({
    type: "POST",
    dataType: "JSON",
    url: Ledgers.API + "business/helper-service",
    data: {
      operation: 'get_serial_force'
    },
    async: false,
    success: function (data) {
      serial_force = data['serial_force'];
    }
  });
  // END Branch List operations
  $.ajax({
    type: "POST",
    url: Ledgers.API + "invoice/invoice-helper-service-api",
    dataType: "JSON",
    data: {
      'operation': 'invoice-terms_conditions',
      'prefix': t
    },
    async: false,
    success: function (return_data) {
      if (return_data.status == 1) {
        user_level=return_data.data['session_user_level'];
        if(!inv_data['invoice'][0]['busi_state'] || !inv_data['invoice'][0]['busi_country'] && (user_level == 1 || user_level == 2)){                   //OPEN Basic Settings Address not set
          basic_settings("load");
        }
        if (return_data.data['bank_list'] != null && return_data.data['bank_list'].length > 0) {
          bank_list = return_data.data['bank_list'];
          inv_data['invoice'][0]['bank_account'] = bank_list[0]['id'];
          $("#bank_list").append('<option selected="" value="' + bank_list[0]['id'] + '">' + bank_list[0]['account_number'] + '-' + bank_list[0]['bank_name'].toUpperCase() + '</option>');
          for (i = 1; i < bank_list.length; i++) {
            $("#bank_list").append('<option value="' + bank_list[i]['id'] + '">' + bank_list[i]['account_number'] + ' - ' + bank_list[i]['bank_name'].toUpperCase() + '</option>');
          }
        }
        if (return_data.data['decimal_point'] != null && return_data.data['decimal_point'].length > 0) {
          decimal_point = return_data.data['decimal_point'];
        }
        
        if($.inArray(operation, ['create-invoice', 'create-bill-of-supply', 'create-bill', 'create-estimate', 'create-dc', 'convert-invoice', 'copy-invoice', 'export-invoice','create-credit-note' ]) != -1 ) {
          if(operation == 'create-invoice' ||operation == 'copy-invoice'|| operation == 'convert-invoice' || operation == 'create-estimate' || operation == 'create-bill-of-supply' || operation == 'create-bill'){
            $('#notify_settings').val(return_data.data['notify']).trigger('change');
          } else {
            if(return_data.data['notify']!=4 && return_data.data['notify']!=3 && return_data.data['notify']!=2){
              $('#notify_settings').val(return_data.data['notify']).trigger('change');
            } else {
            $('#notify_settings').val(6).trigger('change');
          }
          }
          due_date_interval = (return_data.data['due_date_interval'] != 0 && return_data.data['due_date_interval'] !== undefined) ? return_data.data['due_date_interval'] : 30;
          var priorDate = new Date().setDate(date.getDate() + parseInt(due_date_interval));
          priorDate_1 = new Date(priorDate);
          var day_1 = ("0" + priorDate_1.getDate()).slice(-2);
          var month_1 = ("0" + (priorDate_1.getMonth() + 1)).slice(-2);
          var newDate_1 = priorDate_1.getFullYear() + "-" + month_1 + "-" + day_1;
          inv_data['invoice'][0]['inv_due_date'] = newDate_1;
          var inv_due_date1 = inv_data['invoice'][0]['inv_due_date'].split("-");
          var inv_due_date_v = inv_due_date1[2] + "-" + inv_due_date1[1] + "-" + inv_due_date1[0];
          $('.pay_due_date').datepicker("update", inv_due_date_v);
          ship_add = return_data.data['shipping_address'];
          due_date_interval = return_data.data['due_date_interval'];
          gen_settings = return_data.data['gen_settings'];
          $('#terms_conditions').val(return_data.data['terms_condition']);
          if (return_data.data['terms_condition'] == null) {
            inv_data['invoice'][0]['terms_conditions'] = '';
          } else {
            inv_data['invoice'][0]['terms_conditions'] = return_data.data['terms_condition'];
          }
          
          if (return_data.data['inv_prefix'] != null) {
            for (var i = 0; i < return_data.data['inv_prefix'].length; i++) {
              $("#inv_prefix").append('<option value="' + return_data.data['inv_prefix'][i] + '">' + return_data.data['inv_prefix'][i] + '</option>');
            }
            $("#inv_prefix").trigger('change');
          }
        }
      }
    }
  });

  $("#customer_list").select2({
    placeholder: "Search Customer",
    ajax: {
      url: Ledgers.API + "customer/list-customer",
      dataType: 'json',
      delay: 250,
      data: function (params) {
        search_text = params.term;
        return {
          operation: 'list-customer',
          type: busi_type,
          q: params.term, // search term
          page: params.page
        };
      },
      processResults: function (data, params) {
        params.page = params.page || 1;
        return {
          results: data.customer,
          pagination: {
            more: (params.page * 10) < data.total_count
          }
        };
      },

      cache: true
    },
    escapeMarkup: function (markup) {
      return markup;
    },
    language: {
      noResults: function (params) {
        if (search_text != undefined && search_text != '') {
          return '<a href=# class="add_cust_btn">Add ' + search_text + '</a>';
        }
      }
    },
    minimumInputLength: 0,
    templateResult: function (e) {
      if (e.loading) return e.text;
      var t = "<div class=' clearfix'>" + e.text + "</div><div>" + e.company + " </div>";
      return t;
    },
    templateSelection: function (e) {
      return e.text || e.text
    }


  });

  $("#sales_person_list").select2({
    placeholder: "Select Employee",
    ajax: {
      url: Ledgers.API + "invoice/invoice-helper-service-api",
      method: 'post',
      dataType: 'json',
      delay: 250,
      data: function (params) {
        search_text = params.term;
        return {
          operation: 'list-employee',
          type: busi_type,
          q: params.term, // search term
          page: params.page
        };
      },
      processResults: function (data, params) {
        params.page = params.page || 1;
        return {
          results: data.customer,
          results1: data.none_value,
          pagination: {
            more: (params.page * 10) < data.count_result
          }
        };
      },

      cache: true
    },
    escapeMarkup: function (markup) {
      return markup;
    },
    language: {
      noResults: function (params) {
        if (search_text != undefined && search_text != '') {
          return '<div> No Records Found</div>';
        }
      }
    },
    minimumInputLength: 0,
    templateResult: function (e) {
      if (e.loading) return e.text;
      var t = "<div class=' clearfix'>" + e.text + "</div>";
      return t;
    },
    templateSelection: function (e) {
      return e.text || e.text
    }
  });

  $(".item_list").select2({
    placeholder: "Select Item",
    ajax: {
      url: Ledgers.API + "product/list-product",
      dataType: 'json',
      delay: 250,
      data: function (params) {
        search_texts = params.term;
        return {
          operation: 'list_product',
          mode: 1,
          q: params.term,
          page: params.page
        };
      },
      processResults: function (data, params) {
        for (var j = 0; j < 10; j++) {
          items_fetch_data[item_fetch_count] = data['items'][j];
          item_fetch_count++;
        }
        params.page = params.page || 1;
        return {
          results: data.items,
          pagination: {
            more: (params.page * 10) < data.total_count
          }
        };
      },
      cache: true
    },
    escapeMarkup: function (markup) {
      return markup;
    },
    language: {
      noResults: function (params) {
        if (search_texts != undefined && search_texts != '') {
          return '<a href="#add-product" class="add_product_btn  " value="1"  >Add ' + search_texts + ' under Goods </a><br> <a href="#add-product"  class="add_product_btn" value="2">Add ' + search_texts + ' under Service</a>';
        }

      }
    },
    minimumInputLength: 0
  });

  $('.inv_date ,.split_pay_date').datepicker("update", inv_date_v);

  if(operation=="create-credit-note"){
    load_paid_inv(0);
  }
}
function load_paid_inv(select_customer_id,select_currency_id="INR"){
  $(".inv_list").select2({
    placeholder: "Search Invoice",
    ajax: {
      url: Ledgers.API + "note/note-helper-service-api",
      dataType: 'json',
      delay: 250,
      data: function (params) {
        search_text = params.term;
        return {
          contact_id: select_customer_id,
          currency: select_currency_id,
          operation: 'creditnote-invoice',
          type: busi_type,
          q: params.term, // search term
          page: params.page
        };
      },
      processResults: function (data, params) {
        params.page = params.page || 1;
        return {
          results: data.invoice,
          pagination: {
            more: (params.page * 10) < data.total_count
          }
        };
      },

      cache: true
    },
    escapeMarkup: function (markup) {
      return markup;
    },
    language: {
      noResults: function (params) {
        if (search_text != undefined && search_text != '') {
          return '<a href=# >Undefined Invoice ' + search_text + '</a>';
        }
      }
    },
    minimumInputLength: 0,
    templateResult: function (e) {
      if (e.loading) return e.text;
      var t = "<div class=' clearfix'>" + e.text + "</div>";
      return t;
    },
    templateSelection: function (e) {
      return e.text || e.text
    }


  });
}

function basic_settings(loader) {
  if(loader=="update"){
    update();
  }else if(loader=="load"){
    load();
    $("#basic_settings_edit_model").modal('show');
  }
  function load(){
    $.ajax({
      type: "POST",
      url: Ledgers.API+"business/get-business",
      dataType : "JSON",
      async:false,
      data: {'listing': 'get-business',
        'bid':Ledgers.user.bid },
      success: function(data)
      { 
        if(data['status'] == 0)
        {
          parent.alert({'type':'danger','msg':data['message']});
        }
        else
        {
          busi_data =  data;
          $("#address1").val(busi_data['business'][0]['addr1']);
       			$("#address2").val(busi_data['business'][0]['addr2']);       			
       			$("#pincode").val(busi_data['business'][0]['pincode']);
       			$("#pan").val(busi_data['business'][0]['pan']);
       			$("#bname").val(busi_data['business'][0]['bname']);
       			
       			$("#email").val($.parseHTML(busi_data['business'][0]['email'])[0]['data']);
       			$("#city").val(busi_data['business'][0]['city']);
				$("#state").val(busi_data['business'][0]['state']).change();
				busi_data['business'][0]['country'] = busi_data['business'][0]['country']=="" ? "INDIA":busi_data['business'][0]['country']
       			$("#country").val(busi_data['business'][0]['country']).change();
       			$("#const_busi").val(busi_data['business'][0]['const_busi']);
       			$("#mobile").val(busi_data['business'][0]['mobile']);
       			$("#constitution").val(busi_data['business'][0]['constitution']);
				$("#confirmGstin").val(busi_data['business'][0]['gstin_status']).trigger('change');
				   
				if(busi_data['business'][0]['gstin_status']==0) $('#gstin').prop("disabled", true).val(''); else $('#gstin').removeAttr('disabled');

       			$("#gstin").val(busi_data['business'][0]['gstin']);	
       			
       			if(busi_data['business'][0]['composition'] == 0)
       			{
       				$("#composition").val('no');
       			}
       			else{
       				$("#composition").val('yes');
       			}
        }
      }
    });
  }
  function update(){
    block = 0;

    busi_data['business'][0]['addr1']=$("#address1").val();
    busi_data['business'][0]['addr2']=$("#address2").val();       			
    busi_data['business'][0]['pincode']=$("#pincode").val();
    busi_data['business'][0]['pan']=$("#pan").val();
    busi_data['business'][0]['bname']=$("#bname").val();
		busi_data['business'][0]['alias_name'] = $("#alias_name").val();
		busi_data['business'][0]['turnover'] = $("#turnover").val();

    busi_data['business'][0]['email'][0]['data']=$("#email").val();
    busi_data['business'][0]['city']=$("#city").val();
    busi_data['business'][0]['state']=$("#state").val();
    busi_data['business'][0]['country']=$("#country").val();
    busi_data['business'][0]['const_busi']=$("#const_busi").val();
    busi_data['business'][0]['mobile']=$("#mobile").val();
    busi_data['business'][0]['constitution']=$("#constitution").val();
    busi_data['business'][0]['gstin_status']=$("#confirmGstin").val();
    busi_data['business'][0]['gstin']=$("#gstin").val();
    if($("#composition").val() == 'yes')
    {
      busi_data['business'][0]['composition'] = 1;
    }
    else
    {
      busi_data['business'][0]['composition'] = 0;
    }
  
				   
		if(busi_data['business'][0]['pan'] != '' || busi_data['business'][0]['gstin'] != '')
		{
			block=0;
		}
		else if(busi_data['business'][0]['gstin_status'] == 0 && busi_data['business'][0]['pan'] == '')
		{
			block=1;
			parent.alert({'type':'danger','msg':'Valid PAN Number is Required'});
		}
		else
		{	block=1;
			parent.alert({'type':'danger','msg':'Valid GSTIN or Valid PAN Number is Required'});
    }
    if(busi_data['business'][0]['gstin'] && settings_gst_validate(busi_data['business'][0]['gstin'])==0 && busi_data['business'][0]['gstin'].length!=15){ parent.alert({'type':'danger','msg':'Business GSTIN is Invalid'}); block = 1; return 0; }
    if(busi_data['business'][0]['pan'] && settings_pan_validate(busi_data['business'][0]['pan'])==0 && busi_data['business'][0]['gstin'].length!=15){parent.alert({'type':'danger','msg':'Business PAN is Invalid'}); block = 1; return 0; }
    if(busi_data['business'][0]['email'] && settings_validateemail(busi_data['business'][0]['email'])==0){ parent.alert({'type':'danger','msg':'Business Email id is Invalid'}); block = 1; return 0; }
    if(busi_data['business'][0]['pincode'] && busi_data['business'][0]['pincode'].length != 6){ parent.alert({'type':'danger','msg':'Pincode is Invalid'}); block = 1; return 0; }
    
		if(settings_check_empty(busi_data['business'][0]['bname'])){ parent.alert({'type':'danger','msg':'Business Name is Required'}); block = 1; return 0; }
		if(settings_check_empty(busi_data['business'][0]['constitution'])){ parent.alert({'type':'danger','msg':'Choose Business Constitution'}); block = 1; return 0; }
		if(parseInt(busi_data['business'][0]['composition']) != 0 && parseInt(busi_data['business'][0]['composition']) != 1){ parent.alert({'type':'danger','msg':'Choose Composition Scheme'}); block = 1; return 0; }
		if(settings_check_empty(busi_data['business'][0]['mobile'])){ parent.alert({'type':'danger','msg':'Mobile Number is Required'}); block = 1; return 0; }
		if(settings_check_empty(busi_data['business'][0]['addr1'])){ parent.alert({'type':'danger','msg':'Address Line 1 is Required'}); block = 1; return 0; }
		if(settings_check_empty(busi_data['business'][0]['state'])){ parent.alert({'type':'danger','msg':'State is Required'}); block = 1; return 0; }
		if(settings_check_empty(busi_data['business'][0]['country'])){ parent.alert({'type':'danger','msg':'Country Name is Required'}); block = 1; return 0; }
		if(settings_check_empty(busi_data['business'][0]['pincode'])){ parent.alert({'type':'danger','msg':'Pincode is Required'}); block = 1; return 0; }
		if(settings_check_empty(busi_data['business'][0]['city'])){ parent.alert({'type':'danger','msg':'City Name is Required'}); block = 1; return 0; }
		busi_data['business'][0]['seq'] =  $("input[name='m_option_1']:checked").val();
		if(busi_data['business'][0]['seq'] == 'custom')
		{
			busi_data['business'][0]['seq'] =  $("#custom_seq").val();
    }
    if(block == 0)
		{
			$.ajax({
	        type: "POST",
	        url: Ledgers.API+"business/edit-business",
	        dataType : "JSON",
	        async:false,
	        data: {busi_data: busi_data},
	        success: function(data)
	        { 
	        	if(data['status'] == 1)
	        	{
	        		parent.alert({'type':'success','msg':data['message']});
              parent.location.reload();
	        	}
	        	else
	        	{
	        		parent.alert({'type':'danger','msg':data['message']});
	        	}
	        }
	      });
		}
  }
  function settings_check_empty(data,type='text')
  {	if(data == '' || data == null || data == ' ')
    {
      return 1;
    }
    else
    {	
      if(type == 'email')
      {	if(!settings_validateemail(data))
        {
        $('#email').val('');
        parent.alert({'type':'danger','msg':'Invalid Email id'});
        return 1;       					
        }
        
      }
      return 0;
    }
  }
  function settings_validateemail(email)
  {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if(filter.test(email)) {
      return 1;
  }
  else {
      return 0;
  }
  }
  function settings_gst_validate(gstin) {
    var r;
    $.ajax({
      type: "POST",
      url: "/m/api/invoice/invoice-helper-service-api",
      dataType: "JSON",
      data: {
        "operation": "check-gstin",
        "gstin": gstin
      },
      async:false,
      success: function (data) {
        if (data['status'] == 1) {
        parent.alert({'msg':'Valid GSTIN','type':'success'});
      }
      else{
        parent.alert({'msg':'Invalid GSTIN','type':'warning'});
      }  
      r = data['status'];
    },
    error: function(data) {
      parent.alert({'msg':'Connection Error','type':'warning'});
    }
  });
  return r;
  }
  function settings_pan_validate(pan) {
  var r;
  $.ajax({
    type: "POST",
    url: Ledgers.API+"helper/helper",
    dataType: "JSON",
    data: {'pan':pan,
          'listing': 'pan_validation'
    },
    async:false,
    success: function(data) {
      // if (data['status'] == 1) {
      //   parent.alert({'msg':'Valid PAN','type':'success'});
      // }
      // else{
      //   parent.alert({'msg':'Invalid PAN','type':'warning'});
      // }  
      r = data['status'];
    },
    error: function(data) {
      parent.alert({'msg':'Connection Error','type':'warning'});
    }
  });
  return r;
  }
}

$(document).ready(function () {
  // basic_settings("load");
  
  $("#basic_settings_edit_model").on("input", "#gstin", function () {
    if($('#gstin').val().length >= 15){
      gst_validate($('#gstin').val());
    }
  });
  
  $("#basic_settings_edit_model").on("input", "#confirmGstin", function () {
    if(parseInt($('#confirmGstin').val()) == 1){
      $('#gstin').prop('disabled', false);
    }else{
      $('#gstin').val("");
      $('#gstin').prop('disabled', true);
    }
  });

  $("#update-basic-settings").click(function() {
    basic_settings("update");
  });
  
  $('#inv_prefix').change(function () {
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/invoice-helper-service-api",
      dataType: "JSON",
      data: {
        'inv_prefix': $('#inv_prefix').val(),
        'operation': 'new-' + t + '-series'
      },
      success: function (response) {
        if (response.status = 1) {
          inv_data['invoice'][0]['inv_number'] = response['invoice-number'];
          $(".inv_no").val(response['invoice-number']);
          inv_data['invoice'][0]['auto_num'] = response['invoice-number'];
          inv_data['invoice'][0]['auto_mode'] = 1;
          $('.page-loader').hide();
          $(".main_body").css("visibility", "visible");
        }
      }
    })
  });
  // END Invoice Prefix

  // Start Invoice NO
  $(".inv_no").change(function() {
    var inv_no = $(".inv_no").val();
    if (inv_no == '') {
      $('#inv_prefix').trigger('change');
      return 0;
    }
    inv_data['invoice'][0]['auto_mode'] = 0;
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/invoice-helper-service-api",
      dataType: "JSON",
      data: {
          'operation': t + '-number-check',
          'number': inv_no
      },
      success: function(data) {
        if (data['valid'] == 'invalid') {
            alert({
                'type': 'danger',
                'msg': '' + t + ' No Already Exixts or Invalid'
            });
            $('.inv_no').val(inv_data['invoice'][0]['inv_number']);
        }
        if (data['valid'] == 'valid') {
          inv_data['invoice'][0]['inv_number'] = inv_no;
          if (inv_data['invoice'][0]['auto_num'] == inv_data['invoice'][0]['inv_number']) {
            inv_data['invoice'][0]['auto_mode'] = 1;
          }
        }
      }
    });
  });
  // END Invoice NO

  // Start Invoice date
  $('.inv_date').change(function () {
    var inv_date0 = $('.inv_date').val();
    var pay_due_date0 = $('.pay_due_date').val();
    if (inv_date0 == '' || inv_date0 == undefined) {
      inv_data['invoice'][0]['inv_date'] = '';
      toastr.error('Date Format dd-mm-yyyy');
      return 0;
    }

    var pay_due_date1 = pay_due_date0.split("-");
    var inv_date1 = inv_date0.split("-");
    if (inv_date0.length != '' && inv_date1.length > 0 && inv_date1[2].length < 4) {
      $('.inv_date').val('');
      inv_data['invoice'][0]['inv_date'] = '';
      toastr.error('Date Format dd-mm-yyyy');
      return 0;
    }

    inv_date = inv_date1[2] + "-" + inv_date1[1] + "-" + inv_date1[0];
    $('.pay_due_date').datepicker('remove');
    $('.pay_due_date').datepicker({
      format: 'dd-mm-yyyy',
      autoclose: true,
      orientation: "bottom left",
      startDate: new Date(inv_date)
    });
    inv_data['invoice'][0]['inv_date'] = inv_date;
    
    if (new Date(pay_due_date1[2], pay_due_date1[1], pay_due_date1[0]) < new Date(inv_date1[2], inv_date1[1], inv_date1[0])) {
      toastr.error("Invoice Date cannot be Greater than Due Date");
      $('.pay_due_date').val(inv_date0).trigger('change').trigger('change');
      inv_data['invoice'][0]['inv_due_date'] =inv_date;
    }
  });
  // END Invoice date

  // Start Invoice due date
  $('.pay_due_date').change(function () {
    var inv_date0 = $('.inv_date').val();
    var pay_due_date0 = $('.pay_due_date').val();
    if (pay_due_date0 == '' || pay_due_date0 == undefined) {
      inv_data['invoice'][0]['inv_due_date'] = '';
      toastr.error("Date Format dd-mm-yyyy");
      return 0;
    }
    inv_data['invoice'][0]['inv_due_date'] = pay_due_date0;
    var pay_due_date1 = pay_due_date0.split("-");
    var inv_date1 = inv_date0.split("-");
    if (pay_due_date0.length != '' && pay_due_date1.length > 0 && pay_due_date1[2].length < 4) {
      $('.pay_due_date').val('');
      inv_data['invoice'][0]['inv_due_date'] = '';
      toastr.error('Date Format dd-mm-yyyy');
      return 0;
    }

    pay_due_date = pay_due_date1[2] + "-" + pay_due_date1[1] + "-" + pay_due_date1[0];
    inv_data['invoice'][0]['inv_due_date'] = pay_due_date;

    if (new Date(pay_due_date1[2], pay_due_date1[1], pay_due_date1[0]) < new Date(inv_date1[2], inv_date1[1], inv_date1[0])) {
      toastr.error('Due Date Cannot be Less than Invoice Date');
    }
  });
  // END Invoice due date

  // START customer select event
  $('.customer_list').change(function () {
    $("#customer_branch_list, #customer_branch_list1, #customer_bill_branch_list").empty();
    var select_customer_id= $('.customer_list').val();
    if(operation=="create-credit-note"){
      $("#credit_select_invoice").show();
      // preload_documnets();
      // $('#credit_select_invoice').prop('disabled', false);
      if(!inv_number){
        $(".inv_list").empty();        
        $(".inv_list").append('<option value="" >select</option>');
        load_paid_inv(select_customer_id,inv_data['invoice'][0]['currency']);
      }
    }
    $.ajax({
      type: "POST",
      url: Ledgers.API + "customer/get-customer",
      dataType: "JSON",
      data: {
        token: 'session',
        'id': select_customer_id
      },
      async: false,
      success: function (customer_info) {
        customer_info_data = customer_info;
        if (customer_info_data['status'] != 0) {
          $(".customer_list").append('<option value=' + customer_info_data['customer'][0]['id'] + ' selected="selected">' + customer_info_data['customer'][0]['name'] + '</option>');

          if(operation == 'export-invoice' || operation == 'edit-export-invoice' ) {
            inv_data['invoice'][0]['reverse_charge'] = 0;
            inv_data['invoice'][0]['export_type'] = 1;
          } else {
            inv_data['invoice'][0]['reverse_charge'] = customer_info_data['customer'][0]['reverse_charge'];
            inv_data['invoice'][0]['export_type'] = customer_info_data['customer'][0]['export_type'];
               
            $('#reverse_charge').val(customer_info_data['customer'][0]['reverse_charge']);
            $('#zero_rated').val(customer_info_data['customer'][0]['export_type']);
            $('#zero_rated').trigger('change');
          }
          
          inv_data['invoice'][0]['cust_id'] = customer_info_data['customer'][0]['id'];
          inv_data['invoice'][0]['cust_name'] = customer_info_data['customer'][0]['name'];
          inv_data['invoice'][0]['cust_gstin'] = customer_info_data['customer'][0]['gstin'];
          inv_data['invoice'][0]['cust_business_name'] = customer_info_data['customer'][0]['company'];
          inv_data['invoice'][0]['bill_company'] = customer_info_data['customer'][0]['name'];
          inv_data['invoice'][0]['ship_company'] = customer_info_data['customer'][0]['name'];

          stop_bill_addr = 0;
          stop_ship_addr = 0;
          customer_bill_addr_count = 0;
          customer_ship_addr_count = 0;

          for (var i = 0; i < customer_info_data['customer'][0]['address'].length; i++) {
            if (customer_info_data['customer'][0]['address'][i]['addr_type'] == 2) {
              $("#customer_branch_list, #customer_branch_list1").append('<option value="' + i + '">' + customer_info_data['customer'][0]['address'][i]['addr1'] + '(' + customer_info_data['customer'][0]['address'][i]['state'] + ')</option>');
              customer_ship_addr_count++;
            }
            if (customer_info_data['customer'][0]['address'][i]['addr_type'] == 1) {
              $("#customer_bill_branch_list").append('<option value="' + i + '">' + customer_info_data['customer'][0]['address'][i]['addr1'] + '(' + customer_info_data['customer'][0]['address'][i]['state'] + ')</option>');
              customer_bill_addr_count++;
            }
            if($.inArray(operation, ['create-invoice', 'create-bill-of-supply', 'create-bill', 'create-estimate', 'create-dc', 'export-invoice','create-credit-note' ]) != -1 ) {
              if (customer_info_data['customer'][0]['address'][i]['addr_type'] == 1 && stop_bill_addr != 1) {
                stop_bill_addr = 1;
                inv_data['invoice'][0]['bill_name'] = customer_info_data['customer'][0]['name'];
                inv_data['invoice'][0]['bill_addr1'] = customer_info_data['customer'][0]['address'][i]['addr1'];
                inv_data['invoice'][0]['bill_addr2'] = customer_info_data['customer'][0]['address'][i]['addr2'];
                inv_data['invoice'][0]['bill_city'] = customer_info_data['customer'][0]['address'][i]['city'];
                inv_data['invoice'][0]['bill_pincode'] = customer_info_data['customer'][0]['address'][i]['pincode'];
                inv_data['invoice'][0]['bill_state'] = customer_info_data['customer'][0]['address'][i]['state'];
                inv_data['invoice'][0]['bill_country'] = customer_info_data['customer'][0]['address'][i]['country'];
              }
              if (customer_info_data['customer'][0]['address'][i]['addr_type'] == 2 && stop_ship_addr != 1) {
                stop_ship_addr = 1;
                inv_data['invoice'][0]['ship_name'] = customer_info_data['customer'][0]['name'];
                inv_data['invoice'][0]['ship_addr1'] = customer_info_data['customer'][0]['address'][i]['addr1'];
                inv_data['invoice'][0]['ship_addr2'] = customer_info_data['customer'][0]['address'][i]['addr2'];
                inv_data['invoice'][0]['ship_city'] = customer_info_data['customer'][0]['address'][i]['city'];
                inv_data['invoice'][0]['ship_pincode'] = customer_info_data['customer'][0]['address'][i]['pincode'];
                inv_data['invoice'][0]['ship_state'] = customer_info_data['customer'][0]['address'][i]['state'];
                inv_data['invoice'][0]['ship_country'] = customer_info_data['customer'][0]['address'][i]['country'];
                inv_data['invoice'][0]['cust_pos'] = customer_info_data['customer'][0]['address'][i]['country'] != "INDIA" ? "INTERNATIONAL" : customer_info_data['customer'][0]['address'][i]['state'];
              }
            }

          }
          $('#customer_bill_branch_list').select2();
          $('#customer_branch_list').select2();
          
          $('#pos_name').html("");
          $('#cust_gst').html("");
          $('#customer_name').html("");
          $('#customer_business_name').html("");
          $('#bill_add_1').html("");
          $('#bill_add_2').html("");
          $('#bill_city').html("");
          $('#bill_pin').html("");
          $('#bill_state').html("");
          $('#bill_states').html("");
          $('#bill_country').html("");
          $('#ship_add_1').html("");
          $('#ship_add_2').html("");
          $('#ship_city').html("");
          $('#ship_pin').html("");
          $('#ship_states').html("");
          $('#ship_state').html("");
          $('#ship_country').html("");
          
          if (customer_ship_addr_count < 2) {
            $("#ship_addr_edit_div").hide()
          } else {
            $("#ship_addr_edit_div").show()
          }
          if (customer_bill_addr_count < 2) {
            $("#bill_addr_edit_div").hide()
          } else {
            $("#bill_addr_edit_div").show()
          }
          if (inv_data['invoice'][0]['bill_addr1'] != '') {
            $("#bill_add_1").show();
            $("#bill_add").hide();
          }
          if (inv_data['invoice'][0]['bill_addr2'] != '') {
            $("#bill_add_2").show();
            $("#bill_add").hide();
          }

          for (var i = 0; i < item_count; i++) {
            inv_data['invoice'][0]['items'][i]['id'] = 0;
            inv_data['invoice'][0]['items'][i]['inv_id'] = 0;
          }
          $('#cust_add_div').show();
          $('#cust_det_div').show();
          $('#cust_det_div_adres').show();
          if (ship_add == 0) {
            $('#ship_addr_div').hide();
          } else if (ship_add == 1) {
            $('#ship_addr_div').show();
          } 
          $('#select_customer').hide();

          data_alter(inv_data);

           // Start To load a data for inputs in address_edit_model model 
           var customer_name = $("#customer_name").html();
           if (customer_name == 'Customer Name') {
             $("#address_edit_model input[id='cust_name_edit']").val('');
           } else {
             $("#address_edit_model input[id='cust_name_edit']").val(customer_name);
           }
           var customer_business_name = $("#customer_business_name").html();
           if (customer_business_name == 'Business Name') {
             $("#address_edit_model input[id='cust_busi_name_edit']").val('');
           } else {
             $("#address_edit_model input[id='cust_busi_name_edit']").val(customer_business_name);
           }
           var pos_name = $("#pos_name").html();
           if (pos_name != 'Place of Supply') {
            $("#pos_name_edit").val(pos_name).trigger('change');
           }
           var cust_gst = $("#cust_gst").html();
           if (cust_gst == 'Update GSTIN') {
             $("#address_edit_model input[id='cust_gst_edit']").val('');
           } else {
             $("#address_edit_model input[id='cust_gst_edit']").val(cust_gst);
           }
           var bill_add_1 = $("#bill_add_1").html();
           if (bill_add_1 == 'Address Line 1') {
             $("#address_edit_model input[id='bill_add_1_edit']").val('');
           } else {
             $("#address_edit_model input[id='bill_add_1_edit']").val(bill_add_1);
           }
           var bill_add_2 = $("#bill_add_2").html();
           if (bill_add_2 == 'Address Line 2') {
             $("#address_edit_model input[id='bill_add_2_edit']").val('');
           } else {
             $("#address_edit_model input[id='bill_add_2_edit']").val(bill_add_2);
           }
           var bill_city = $("#bill_city").html();
           if (bill_city == 'City') {
             $("#address_edit_model input[id='bill_city_edit']").val('');
           } else {
             $("#address_edit_model input[id='bill_city_edit']").val(bill_city);
           }
           var bill_pin = $("#bill_pin").html();
           if (bill_pin == 'Pincode') {
             $("#address_edit_model input[id='bill_pin_edit']").val('');
           } else {
             $("#address_edit_model input[id='bill_pin_edit']").val(bill_pin);
           }
           var bill_country = $("#bill_country").html();
           if (bill_country != 'Country') {
             $("#address_edit_model select[id='bill_country_edit']").val(bill_country).trigger('change');
           }
           var bill_state = $("#bill_state").html();
           if (bill_state != 'State') {
             $("#address_edit_model select[id='bill_state_edit']").val(bill_state).trigger('change');
           }
           var ship_add_1 = $("#ship_add_1").html();
           if (ship_add_1 == 'Address Line 1') {
             $("#address_edit_model input[id='ship_add_1_edit']").val('');
           } else {
             $("#address_edit_model input[id='ship_add_1_edit']").val(ship_add_1);
           }
           var ship_add_2 = $("#ship_add_2").html();
           if (ship_add_2 == 'Address Line 2') {
             $("#address_edit_model input[id='ship_add_2_edit']").val('');
           } else {
             $("#address_edit_model input[id='ship_add_2_edit']").val(ship_add_2);
           }
           var ship_city = $("#ship_city").html();
           if (ship_city == 'City') {
             $("#address_edit_model input[id='ship_city_edit']").val('');
           } else {
             $("#address_edit_model input[id='ship_city_edit']").val(ship_city);
           }
           var ship_pin = $("#ship_pin").html();
           if (ship_pin == 'Pincode') {
             $("#address_edit_model input[id='ship_pin_edit']").val('');
           } else {
             $("#address_edit_model input[id='ship_pin_edit']").val(ship_pin);
           }
           var ship_country = $("#ship_country").html();
           if (ship_country != 'Country') {
             $("#address_edit_model select[id='ship_country_edit']").val(ship_country).trigger('change');
           }
           var ship_state = $("#ship_state").html();
           if (ship_state != 'State') {
             $("#address_edit_model select[id='ship_state_edit']").val(ship_state).trigger('change');
           }
           if($('.customer_list').val()){
            $('#cust_name_edit').prop('disabled', false);
            $('#cust_gst_edit').prop('disabled', false);
            if($('#zero_rated').val()!=1){
              $('#pos_name_edit').prop('disabled', false);
            }
            $('#cust_busi_name_edit').prop('disabled', false);
            $('#customer_bill_branch_list').prop('disabled', false);
            $('#customer_branch_list').prop('disabled', false);
            $('#bill_add_1_edit').prop('disabled', false);
            $('#bill_add_2_edit').prop('disabled', false);
            $('#bill_city_edit').prop('disabled', false);
            $('#bill_pin_edit').prop('disabled', false);
            $('#bill_state_edit').prop('disabled', false);
            $('#bill_state_edits').prop('disabled', false);
            $('#ship_add_1_edit').prop('disabled', false);
            $('#ship_add_2_edit').prop('disabled', false);
            $('#ship_city_edit').prop('disabled', false);
            $('#ship_pin_edit').prop('disabled', false);
            $('#ship_state_edits').prop('disabled', false);
            $('#ship_state_edit').prop('disabled', false);
            if($('#zero_rated').val()!=0){
              $('#ship_country_edit').prop('disabled', false);
              $('#bill_country_edit').prop('disabled', false);
            }
            $('.customer_list').select2('open');
          }
           
           // End To load a data for inputs in address_edit_model model 

           data_alter(inv_data);
           gst_alter();
           final_charges_alter();
        } else {
          $(".customer_list").select2("val", "");
          $('#select_customer').show();
          $('#update_customer').hide();
        }
      }
    });
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/invoice-helper-service-api",
      dataType: "JSON",
      data: {
        'operation': 'customer-wallet',
        'contact_id': select_customer_id
      },
      async: false,
      success: function (customer_info) {
        if (customer_info['status'] == 1) {
          $('#party-balance').show();
          $('#party_balance').html('Rs.' + customer_info['contact_info'][0]['wallet']);
        }
      }
    });
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/invoice-helper-service-api",
      dataType: "JSON",
      data: {
        'operation': 'get-inv-list',
        'cust_id': select_customer_id
      },
      async: false,
      success: function (customer_info) {
        if (customer_info['status'] == 1) {
          $("#invoice-list").show();
          $('#invoice_list').empty()
          if (customer_info['list'].length > 0) {
            customer_info['list'].forEach(element => {
              $('#invoice_list').append('<tr><td style="text-align:center;">' + element.inv_number + '</td><td style="text-align:center;"> Rs.' + element.total_amt + '</td></tr>');
            });
          } else {
            $('#invoice_list').append('<tr><td style="text-align:center;" colspan="2">No Record Found</td></tr>');
          }
        }
      }
    });
  });
  // END Customer select even

  // BEGIN change shipping addres
  $('#customer_branch_list').change(function () {
    var cust_branch_id = $('#customer_branch_list').val();

    // $("#address_edit_model input[id='ship_name_edit']").val(customer_info_data['customer'][0]['name']);
    $("#address_edit_model input[id='ship_add_1_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['addr1']);
    $("#address_edit_model input[id='ship_addr_2_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['addr2']);
    $("#address_edit_model input[id='ship_pin_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['pincode']);
    $("#address_edit_model input[id='ship_city_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['city']);
    $("#address_edit_model select[id='ship_country_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['country']).trigger('change');
    $("#address_edit_model select[id='ship_state_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['state']).trigger('change');
    
    // inv_data['invoice'][0]['ship_name'] = customer_info_data['customer'][0]['name'];
    inv_data['invoice'][0]['ship_addr1'] = customer_info_data['customer'][0]['address'][cust_branch_id]['addr1'];
    inv_data['invoice'][0]['ship_addr2'] = customer_info_data['customer'][0]['address'][cust_branch_id]['addr2'];
    inv_data['invoice'][0]['ship_city'] = customer_info_data['customer'][0]['address'][cust_branch_id]['city'];
    inv_data['invoice'][0]['ship_pincode'] = customer_info_data['customer'][0]['address'][cust_branch_id]['pincode'];
    inv_data['invoice'][0]['ship_state'] = customer_info_data['customer'][0]['address'][cust_branch_id]['state'];
    inv_data['invoice'][0]['ship_country'] = customer_info_data['customer'][0]['address'][cust_branch_id]['country'];
    data_alter(inv_data);

    gst_alter();
    final_charges_alter();
  });
  //  END change shipping addres

  // BEGIN change  Billing addres
  $('#customer_bill_branch_list').change(function () {
    var cust_branch_id = $('#customer_bill_branch_list').val();

    // $("#address_edit_model input[id='bill_name_edit']").val(customer_info_data['customer'][0]['name']);
    $("#address_edit_model input[id='bill_add_1_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['addr1']);
    $("#address_edit_model input[id='bill_add_2_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['addr2']);
    $("#address_edit_model input[id='bill_pin_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['pincode']);
    $("#address_edit_model input[id='bill_city_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['city']);
    $("#address_edit_model select[id='bill_country_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['country']).trigger('change');
    $("#address_edit_model select[id='bill_state_edit']").val(customer_info_data['customer'][0]['address'][cust_branch_id]['state']).trigger('change');
    
    // inv_data['invoice'][0]['bill_name'] = customer_info_data['customer'][0]['name'];
    inv_data['invoice'][0]['bill_addr1'] = customer_info_data['customer'][0]['address'][cust_branch_id]['addr1'];
    inv_data['invoice'][0]['bill_addr2'] = customer_info_data['customer'][0]['address'][cust_branch_id]['addr2'];
    inv_data['invoice'][0]['bill_city'] = customer_info_data['customer'][0]['address'][cust_branch_id]['city'];
    inv_data['invoice'][0]['bill_pincode'] = customer_info_data['customer'][0]['address'][cust_branch_id]['pincode'];
    inv_data['invoice'][0]['bill_state'] = customer_info_data['customer'][0]['address'][cust_branch_id]['state'];
    inv_data['invoice'][0]['bill_country'] = customer_info_data['customer'][0]['address'][cust_branch_id]['country'];
    data_alter(inv_data);
    gst_alter();
    final_charges_alter();
  });
  //  END change Billing addres

  //BEGIN change Branch address
  $('#branch_list').change(function () {
    var branch_id = $('#branch_list').val();
    var busi_branch_id = $('#branch_list').attr('busi_branch_id');
    inv_data['invoice'][0]['busi_branch_id'] = business_branch_data['branch'][branch_id]['id'];
    inv_data['invoice'][0]['busi_gstin'] = business_branch_data['branch'][branch_id]['gstin'];
    inv_data['invoice'][0]['busi_addr1'] = business_branch_data['branch'][branch_id]['addr1'];
    inv_data['invoice'][0]['busi_addr2'] = business_branch_data['branch'][branch_id]['addr2'];
    inv_data['invoice'][0]['busi_state'] = business_branch_data['branch'][branch_id]['state'];
    inv_data['invoice'][0]['busi_city'] = business_branch_data['branch'][branch_id]['city'];
    inv_data['invoice'][0]['busi_pincode'] = business_branch_data['branch'][branch_id]['pincode'];
    inv_data['invoice'][0]['busi_country'] = business_branch_data['branch'][branch_id]['country'];
    data_alter(inv_data);
    gst_alter();
    final_charges_alter();
  });
  //END change Branch address
  
  $('#credit_select_invoice').change(function () {
    var inv_number = $('#credit_select_invoice').val();
    var note_number = $('.inv_no').val();
    var note_date= $(".inv_date").val();
    var note_due_date= $(".pay_due_date").val();
    $('#credit_select_invoice').prop('disabled', true);
    $('#customer_list').prop('disabled', true);
    $.ajax(
    {
      type: "POST",
      url: Ledgers.API + "invoice/get-invoice-api",
      dataType: "JSON",
      async: false,
      data:
      {
        inv_number: inv_number
      },
      success: function (data)
      {
        if (data['status'] != 0) {
          inv_data = data;
          inv_data['operation'] = 'create-credit-note';
          inv_data['bid'] = Ledgers.user.bid;
          inv_data['pinv_number'] = inv_data['invoice'][0]['inv_number'];
          inv_data['pinv_date'] = inv_data['invoice'][0]['inv_date'];
          inv_data['ppay_due_date'] = inv_data['invoice'][0]['inv_due_date'];
          inv_data['invoice'][0]['inv_number'] = note_number;
          inv_data['invoice'][0]['inv_date'] = note_date;
          inv_data['invoice'][0]['due_date'] = note_due_date;
          inv_data['invoice'][0]['contact_id'] = inv_data['invoice'][0]['cust_id'];
          inv_data['invoice'][0]['contact_name'] = inv_data['invoice'][0]['cust_name'];
          inv_data['invoice'][0]['inv_id'] = inv_data['invoice'][0]['id'];
          inv_data['invoice'][0]['gstin'] = inv_data['invoice'][0]['cust_gstin'];
          $('#credit_select_invoice').prop('disabled', true);
          data_alter(inv_data); 
          $('.inv_date').datepicker("update", note_date);
          $('.pay_due_date').datepicker("update", note_due_date);
          preload_edit();
          $('#cust_det_div,#cust_det_div_adres,#ship_addr_div').show();
        } else {
          alert({
            'type': 'danger',
            'msg': 'Invoice #' + select_inv_num + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "invoice/create-invoice";
        }
      }
    })
  })

  // Start To Change Branch 
  $("#bank_list").change(function () {
    inv_data['invoice'][0]['bank_account'] = $("#bank_list").val();
  })
  // END To Change Branch 

  // Start Sales Person 
  $("#sales_person_list").change(function () {
    var sales_by_id = $("#sales_person_list").val();
    inv_data['invoice'][0]['sales_by'] = sales_by_id;
  });
  // END Sales Person

  // Start Notes Change 
  $("#notes").change(function () {
    inv_data['invoice'][0]['notes'] = $("#notes").val();
  });
  // END Notes Change 

  // Start Terms Change 
  $("#terms_conditions").change(function () {
    inv_data['invoice'][0]['terms_conditions'] = $("#terms_conditions").val();
  });
  // END Terms Change 

  // Start reverse charges Change for GST Alter
  $("#reverse_charge").change(function () {
    inv_data['invoice'][0]['reverse_charge'] = $("#reverse_charge").val();
    gst_alter();
    final_charges_alter();
  });
  // END reverse charges Change for GST Alter

  // BEGIN Add Charge
  $('#additional_charges').change(function () {
    var charge_type = $("#additional_charges").val();
   
    if (charge_type == 0) {
      while (inv_data['invoice'][0]['others'].length > 0) {
        inv_data['invoice'][0]['others'].pop();
      }
      $('.charge_div').remove();
    } else {
      for (var q = 0; q < inv_data['invoice'][0]['others'].length; q++) {
        if (inv_data['invoice'][0]['others'][q]['charge_type'] == charge_type) {
          if (auto_add_charge == 0) {
            charge_type_found = 1;

          }

        }
      }

      if (charge_type_found == 0) {
        if (auto_add_charge == 0) {
          inv_data['invoice'][0]['others'].push({
            'id': 0,
            "inv_id": 0,
            "charge_type": charge_type,
            "charge_value": 0,
            'status': 1
          });
          charge_value = 0;
        }
        if (auto_add_charge == 1) {
          for (var q = 0; q < inv_data['invoice'][0]['others'].length; q++) {
            if (inv_data['invoice'][0]['others'][q]['charge_type'] == charge_type) {
              charge_value = inv_data['invoice'][0]['others'][q]['charge_value'];
            }
          }
        }
        $("#add_charges_div").after('<tr charge_type="' + charge_type + '" class=charge_div>' +
          "<td style=width:55%;vertical-align:middle;>Additional Charges</td>" +
          "<td class=text-right>" +
          "<span>" + charge_type + " </span>" +
          '<button id="1" style=width:20px;height:20px; charge_type="' + charge_type + '" type=button class="btn btn-danger btn-sm charge_close_btn"><i id="2" style=margin-top:-10px;margin-left:-5px; class="fa fa-trash"></i></button>' +
          "</td>" +
          "</tr>");


        $("#adjust_div").after('#<tr charge_type="' + charge_type + '" class=charge_div>' +
          "<td style='width:55%;vertical-align: middle; border-right: 1px solid #ada7a7;border-bottom: 0px;'>" + charge_type + "</td>" +
          "<td style='text-align:right;padding-right:0px;'>" +
          '<input style="text-align:right;color:black;padding-right:4px;" charge_type="' + charge_type + '"  type=number class="charge_input form-control m-input form-control-sm" value="' + charge_value + '">' +
          "</td>" +
          "</tr>");
        auto_add_charge = 0;

      }
      charge_type_found = 0;
    }

    final_charges_alter();
  });
  
  $("#address_edit_model").on("input", "#cust_gst_edit", function () {
    if($('#cust_gst_edit').val().length >= 15){
      gst_validate($('#cust_gst_edit').val());
    }
  });

  $("#address_edit_model").on("change", "#cust_gst_edit", function () {
    if($('#cust_gst_edit').val().length <= 15){
      toastr.warning('Invalid GSTIN');
    }
  });

  $("body").on("change", ".charge_input", function () {
    var charge_type = $(this).attr('charge_type');
    var charge_val = $(this).val();
    for (var q = 0; q < inv_data['invoice'][0]['others'].length; q++) {
      if (inv_data['invoice'][0]['others'][q]['charge_type'] == charge_type) {
        inv_data['invoice'][0]['others'][q]['charge_value'] = charge_val;
      }
    }
    final_charges_alter();
  });

  $("body").on("click", ".charge_close_btn", function () {
    var charge_type = $(this).attr('charge_type');
    $('tr[charge_type="' + charge_type + '"]').hide();
    for (var q = 0; q < inv_data['invoice'][0]['others'].length; q++) {
      if (inv_data['invoice'][0]['others'][q]['charge_type'] == charge_type) {
        inv_data['invoice'][0]['others'].splice(q, 1);
      }
    }
    inv_data['invoice'][0]['total_addvalue_amt'] = 0;
    final_charges_alter();
  });
  // END Add Charge

   // BEGIN Invoice GST Options 
   $("#zero_rated").change(function () {
    var zero_supply_type = $("#zero_rated").val();
    if (zero_supply_type == 0) {
      inv_data['invoice'][0]['export_type'] = zero_supply_type;
      $("#export_bond_status").val(0).trigger('change');
      $("#ship_bill_no , #ship_port_code").val('');
      $(".ship_bill_date").val('');
      $("#bill_country_edit,#ship_country_edit").val("INDIA").trigger('change');
      if(inv_data['invoice'][0]['ship_state']){
        $("#pos_name_edit").val(inv_data['invoice'][0]['ship_state']).trigger('change');
        // $("#pos_name_edit").prop('disabled', true);
      }
      $("#bill_country_edit,#ship_country_edit").prop('disabled', true);
      $("#ship_bill_no_div , #ship_post_code_div , #ship_bill_date_div, #export_bond_status_div").hide();
      // $('#gst_headtext,.gst_text,.gst').show();
    } else if (zero_supply_type == 1) {
      inv_data['invoice'][0]['export_type'] = zero_supply_type;
      if(inv_data['invoice'][0]['ship_state']){
        $("#pos_name_edit").val("INTERNATIONAL").trigger('change');
        // $("#pos_name_edit").prop('disabled', true);
      }
      $("#ship_bill_no_div , #ship_post_code_div , #ship_bill_date_div ,#export_bond_status_div").show();
      // $('#gst_headtext,.gst').hide();
    } else if (zero_supply_type != 0 && zero_supply_type != 1) {
        inv_data['invoice'][0]['export_type'] = zero_supply_type;
        if(inv_data['invoice'][0]['ship_state']){
          $("#pos_name_edit").val(inv_data['invoice'][0]['ship_state']).trigger('change');
          // $("#pos_name_edit").prop('disabled', true);
        }
        $("#ship_bill_no_div , #ship_post_code_div , #ship_bill_date_div ,#export_bond_status_div").show();
        // $('#gst_headtext,.gst_text,.gst').show();
    }
    gst_alter();
    final_charges_alter();
  });

  $("#export_bond_status").change(function () {
    var export_lut = $("#export_bond_status").val();
    var zero_supply_type = $("#zero_rated").val();
    if(zero_supply_type == 1){
      if (export_lut == 0) {
        inv_data['invoice'][0]['export_lut'] = 0;
      } else {
        inv_data['invoice'][0]['export_lut'] = 1;
        $("#pos_name_edit").val("INTERNATIONAL").trigger('change');
      }
    }else{
      inv_data['invoice'][0]['export_lut'] = export_lut;
      if(inv_data['invoice'][0]['ship_state']){
        $("#pos_name_edit").val(inv_data['invoice'][0]['ship_state']).trigger('change');
      }
    }
    gst_alter();
    final_charges_alter();
  });

  $('#ship_port_code').change(function () {
    inv_data['invoice'][0]['export_port_code'] = $('#ship_port_code').val();
  });

  $('.ship_bill_date').change(function () {
    inv_data['invoice'][0]['export_bill_date'] = $('.ship_bill_date').val();
  });

  $('#ship_bill_no').change(function () {
    inv_data['invoice'][0]['export_bill_no'] = $('#ship_bill_no').val();
  });

  $('#special_supply').change(function () {
    var spl_supply = $('#special_supply').val();
    inv_data['invoice'][0]['special_supply'] = spl_supply;
    gst_alter();
    final_charges_alter();
  });
  //END Invoice GST Options

  $('body').on('change', '.item_list', function () {
    
    if (inv_data['invoice'][0]['cust_id'] == 0 ) {
      $('option:selected', this).remove();
      toastr.error('Please Select Customer Before Adding Item(s)');
    } else {
      var selected_item_id = $(this).val();
      for (i = 0; i < items_fetch_data.length; i++) {
        if (items_fetch_data && items_fetch_data[i] && selected_item_id == items_fetch_data[i]['id']) {
          nill_rate[i] = 0
          other_than_gst[i] = 0
          if (items_fetch_data[i]['rate'] < 0) {
            other_than_gst[i] = items_fetch_data[i]['rate'];
            nill_rate[i] = (items_fetch_data[i]['rate'] == -1) ? 1 : 0;
            $(this).closest('tr').find('.item_non_taxable').attr('disabled', false);
            $(this).closest('tr').find('.item_taxable').attr('disabled', false);
            items_fetch_data[i]['rate'] = 0;
          }
          
          let currency_rate = currency_rates[inv_data['invoice'][0]['currency']];
          var inv_id = 0;
          var sno = item_count + 1;
          var pid = items_fetch_data[i]['id'];
          var sku = items_fetch_data[i]['id'];
          var item_name = items_fetch_data[i]['text'];
          var item_code = items_fetch_data[i]['code'];
          var item_description = items_fetch_data[i]['description'];
          var rate = parseFloat(parseFloat(items_fetch_data[i]['non_tax']*currency_rate) + parseFloat(items_fetch_data[i]['net_price']*currency_rate)).toFixed(decimal_point);
          var item_type = items_fetch_data[i]['type'];
          var cess_amt = items_fetch_data[i]['cess'];
          var gst_rate = items_fetch_data[i]['rate']*currency_rate;
          var taxable_amt = items_fetch_data[i]['net_price']*currency_rate;
          var non_taxable_amt = items_fetch_data[i]['non_tax']*currency_rate;
          var quantity = 1;
          var discount = 0;
          var item_nill_rate = nill_rate[i];
          var item_other_than_gst = other_than_gst[i];

          
          $(this).closest('tr').find('.gst_per_rate').html(items_fetch_data[i]['rate'] + "%");
          $(this).closest('tr').find('.item_type_span').html(items_fetch_data[i]['type'] == 1 ? "HSN: " : "SAC: " +items_fetch_data[i]['code']);
          
          if (ship_add == 2) $('#ship_addr_div').show();

          $(this).closest('tr').find('.item_type_span').show();
          $(this).closest('tr').find('.item_hsn').attr('placeholder', 'HSN');
          $(this).closest('tr').find('.item_type_span').html("HSN: "+items_fetch_data[i]['code']);
         
          $(this).closest('tr').find('.item_descr').show();
          

          $(this).closest('tr').find('.item_hsn').val(items_fetch_data[i]['code']);
          $(this).closest('tr').find('.item_descr').val(items_fetch_data[i]['description']);
          // $(this).closest('tr').find('.item_rate').val(parseFloat(parseFloat(items_fetch_data[i]['non_tax']) + parseFloat(items_fetch_data[i]['net_price'])).toFixed(2));
          // $(this).closest('tr').find('.item_taxable').val(items_fetch_data[i]['net_price']);
          // $(this).closest('tr').find('.item_non_taxable').val(items_fetch_data[i]['non_tax']);
          $(this).closest('tr').find('.item_qty').val(1);
          $(this).closest('tr').find('.item_cess_amt').val(items_fetch_data[i]['cess']);
          $(this).closest('tr').find('.item_type').val(items_fetch_data[i]['type']);
          $(this).closest('tr').find('.item_sno').val(sno);
          
          $(this).closest('tr').find('.item_sno').attr('item_cess_rate', items_fetch_data[i]['cess']);
          $(this).closest('tr').find('.item_sno').attr('item_gst_rate', items_fetch_data[i]['rate']);
          $(this).closest('tr').find('.item_sno').attr('item_name', items_fetch_data[i]['text']);
          $(this).closest('tr').find('.item_sno').attr('item_pid', items_fetch_data[i]['id']);
          $(this).closest('tr').find('.item_sno').attr('item-added', '2');
          $(this).closest('tr').find('.item_sno').attr('item_rate_inr', parseFloat(parseFloat(items_fetch_data[i]['non_tax']) + parseFloat(items_fetch_data[i]['net_price'])).toFixed(decimal_point));
          $(this).closest('tr').find('.item_sno').attr('item_taxable_inr', items_fetch_data[i]['net_price']);
          $(this).closest('tr').find('.item_sno').attr('item_nontax_inr', items_fetch_data[i]['non_tax']);
          $(this).closest('tr').find('.item_non_taxable').attr('single_non_tax', items_fetch_data[i]['non_tax']);

          if(inv_data['invoice'][0]['currency'] == 'INR') {
            $(this).closest('tr').find('.item_rate').val(parseFloat(parseFloat(items_fetch_data[i]['non_tax']) + parseFloat(items_fetch_data[i]['net_price'])).toFixed(decimal_point));
            $(this).closest('tr').find('.item_rate_qty').val(parseFloat((parseFloat(parseFloat(items_fetch_data[i]['non_tax']) + parseFloat(items_fetch_data[i]['net_price'])).toFixed(decimal_point)) * $(this).closest('tr').find('.item_qty').val()).toFixed(decimal_point));
            $(this).closest('tr').find('.item_taxable').val(items_fetch_data[i]['net_price']);
            $(this).closest('tr').find('.item_non_taxable').val(items_fetch_data[i]['non_tax']);
            $(this).closest('tr').find('.item_non_taxable').attr('single_non_tax', items_fetch_data[i]['non_tax']);
            $(this).closest('tr').find('.item_non_taxable').attr('single_non_tax_inr', items_fetch_data[i]['non_tax']);
          } else {
            let other_currency = currency_rates[inv_data['invoice'][0]['currency']];
            $(this).closest('tr').find('.item_rate').val(parseFloat((parseFloat(items_fetch_data[i]['non_tax']) + parseFloat(items_fetch_data[i]['net_price'])) * other_currency).toFixed(decimal_point));
            $(this).closest('tr').find('.item_rate_qty').val(parseFloat((parseFloat((parseFloat(items_fetch_data[i]['non_tax']) + parseFloat(items_fetch_data[i]['net_price'])) * other_currency).toFixed(decimal_point)) * $(this).closest('tr').find('.item_qty').val()).toFixed(decimal_point));
            $(this).closest('tr').find('.item_taxable').val(parseFloat(items_fetch_data[i]['net_price'] * other_currency).toFixed(decimal_point));
            $(this).closest('tr').find('.item_non_taxable').val(parseFloat(items_fetch_data[i]['non_tax'] * other_currency).toFixed(decimal_point));
            $(this).closest('tr').find('.item_non_taxable').attr('single_non_tax', parseFloat(items_fetch_data[i]['non_tax'] * other_currency).toFixed(decimal_point) );
          }
          
          break;
        }
      }
      if ($("#special_supply").val() == 3) {
        gst_rate = 0.1;
      }
      gst_rate = parseFloat(gst_rate);
      var item_rate = parseFloat(taxable_amt); // taxable amt
      var local_rate = parseFloat(gst_rate / 2).toFixed(2);

      if (gst_type == 0) {
        $(this).closest('tr').find('.gst_per_rate').hide();
        $(this).closest('tr').find('.item_type_span').hide();

        $(this).closest('tr').find('.item_cgst_per').val(0);
        $(this).closest('tr').find('.item_sgst_per').val(0);
        $(this).closest('tr').find('.item_igst_per').val(0);
        $(this).closest('tr').find('.item_gst_per').val(0);
        $(this).closest('tr').find('.item_cgst_amt').val(0);
        $(this).closest('tr').find('.item_sgst_amt').val(0);
        $(this).closest('tr').find('.item_igst_amt').val(0);
        $(this).closest('tr').find('.item_gst_amt').val(0);
        $(this).closest('tr').find('.item_cess_amt').val(0);
        cess_rate = 0;
        cgst_rate = 0;
        sgst_rate = 0;
        igst_rate = 0;
        cgst_amt = 0;
        sgst_amt = 0;
        igst_amt = 0;
      } else if (gst_type == 1) {
        $(this).closest('tr').find('.item_type_span').show();
        
        // Hide If item_code is empty
        if (items_fetch_data[i]['code'] == '') {
          $(this).closest('tr').find('.item_hsn').hide()
          $(this).closest('tr').find('.item_type').hide()
          $(this).closest('tr').find('.item_type_span').hide();
        } else {
          $(this).closest('tr').find('.item_type_span').show();
          $(this).closest('tr').find('.item_hsn').show()
          $(this).closest('tr').find('.item_type').show()
        }

        $(this).closest('tr').find('.item_cgst_per').val(local_rate);
        $(this).closest('tr').find('.item_sgst_per').val(local_rate);
        $(this).closest('tr').find('.item_igst_per').val(0);
        $(this).closest('tr').find('.item_gst_per').val(gst_rate);
        $(this).closest('tr').find('.item_cgst_amt').val(parse_float_2(item_rate * (local_rate / 100)));
        $(this).closest('tr').find('.item_sgst_amt').val(parse_float_2(item_rate * (local_rate / 100)));
        $(this).closest('tr').find('.item_igst_amt').val(0);
        $(this).closest('tr').find('.item_gst_amt').val(parse_float_2(item_rate * (gst_rate / 100)));
        cgst_rate = local_rate;
        sgst_rate = local_rate;
        igst_rate = 0;
        cgst_amt = parseFloat(item_rate * (local_rate / 100));
        sgst_amt = parseFloat(item_rate * (local_rate / 100));
        igst_amt = 0;
      } else if (gst_type == 2) {
        $(this).closest('tr').find('.item_type_span').show();
        
        // Hide If item_code is empty
        if (items_fetch_data[i]['code'] == '') {
          $(this).closest('tr').find('.item_hsn').hide()
          $(this).closest('tr').find('.item_type').hide()
          $(this).closest('tr').find('.item_type_span').hide();
        } else {
          $(this).closest('tr').find('.item_type_span').show();
          $(this).closest('tr').find('.item_hsn').show()
          $(this).closest('tr').find('.item_type').show()
        }

        $(this).closest('tr').find('.item_cgst_per').val(0);
        $(this).closest('tr').find('.item_sgst_per').val(0);
        $(this).closest('tr').find('.item_igst_per').val(gst_rate);
        $(this).closest('tr').find('.item_gst_per').val(gst_rate);
        $(this).closest('tr').find('.item_cgst_amt').val(0);
        $(this).closest('tr').find('.item_sgst_amt').val(0);
        $(this).closest('tr').find('.item_igst_amt').val(parse_float_2(item_rate * (gst_rate / 100)));
        $(this).closest('tr').find('.item_gst_amt').val(parse_float_2(item_rate * (gst_rate / 100)));
        cgst_rate = 0;
        sgst_rate = 0;
        igst_rate = gst_rate;
        cgst_amt = 0;
        sgst_amt = 0;
        igst_amt = parse_float_2(item_rate * (gst_rate / 100));
      } 
      var item_total_amt = parse_float_2(rate)+parse_float_2(cgst_amt+sgst_amt)+parse_float_2(igst_amt);
      $(this).closest('tr').find('.item_total').val(parse_float_2(item_total_amt));

      inv_data['invoice'][0]['items'].push({
        "id": "",
        "inv_id": "",
        "sno": "",
        "item_scr": '',
        "pid": "",
        "sku": "",
        "item_name": "",
        "item_description": "",
        "item_code": "",
        "item_type": "",
        "quantity": "",
        "rate": "",
        "discount": "",
        "non_taxable_amt": 0,
        "taxable_amt": "",
        "gst_rate": "",
        "igst_rate": "",
        "cgst_rate": "",
        "sgst_rate": "",
        "igst_amt": "",
        "cgst_amt": "",
        "sgst_amt": "",
        "cess_amt": "",
        "item_total_amt": "",
        "added_on": "",
        "added_by": "",
        "nill_rate": "",
        "other_than_gst": "",
      });

      inv_data['invoice'][0]['items'][item_count]['id'] = 0;
      inv_data['invoice'][0]['items'][item_count]['inv_id'] = inv_id;
      inv_data['invoice'][0]['items'][item_count]['sno'] = sno;
      inv_data['invoice'][0]['items'][item_count]['pid'] = pid;
      inv_data['invoice'][0]['items'][item_count]['sku'] = sku;
      inv_data['invoice'][0]['items'][item_count]['item_name'] = item_name;
      inv_data['invoice'][0]['items'][item_count]['item_description'] = item_description;
      inv_data['invoice'][0]['items'][item_count]['item_code'] = item_code;
      inv_data['invoice'][0]['items'][item_count]['item_type'] = item_type;
      inv_data['invoice'][0]['items'][item_count]['quantity'] = quantity;
      inv_data['invoice'][0]['items'][item_count]['rate'] = rate;
      inv_data['invoice'][0]['items'][item_count]['discount'] = discount;
      inv_data['invoice'][0]['items'][item_count]['taxable_amt'] = taxable_amt;
      inv_data['invoice'][0]['items'][item_count]['non_taxable_amt'] = non_taxable_amt;
      inv_data['invoice'][0]['items'][item_count]['gst_rate'] = gst_rate;
      inv_data['invoice'][0]['items'][item_count]['igst_rate'] = igst_rate;
      inv_data['invoice'][0]['items'][item_count]['cgst_rate'] = cgst_rate;
      inv_data['invoice'][0]['items'][item_count]['sgst_rate'] = sgst_rate;
      inv_data['invoice'][0]['items'][item_count]['igst_amt'] = igst_amt;
      inv_data['invoice'][0]['items'][item_count]['cgst_amt'] = cgst_amt;
      inv_data['invoice'][0]['items'][item_count]['sgst_amt'] = sgst_amt;
      inv_data['invoice'][0]['items'][item_count]['cess_amt'] = cess_amt;
      inv_data['invoice'][0]['items'][item_count]['item_total_amt'] = item_total_amt;
      inv_data['invoice'][0]['items'][item_count]['item_scr'] = '';
      inv_data['invoice'][0]['num_items'] = sno;
      inv_data['invoice'][0]['items'][item_count]['nill_rate'] = item_nill_rate;
      inv_data['invoice'][0]['items'][item_count]['other_than_gst'] = item_other_than_gst;
      item_count++;
      final_charges_alter();

      $('.item_list').select2('destroy');
      var $tr    = $(this).closest('.tr_clone');
      var $clone = $tr.clone();
      $('.item_act_btn_del').show();
      $('.item_act_btn_edit').show();
      $('#select_customer').hide();
      $('.gst_text').show();    
      $clone.find(':input:not([type="button"])').each(function(idx, ele) { ele.value = ""; });
      $clone.find('.item_type_span').html('');
      $clone.find('.gst_per_rate').html('');
      $clone.find('.gst_text').hide();
      $('.item_list').select2();
      $('.item_list').prop('disabled', true);
      $clone.find('.item_list').select2({
        placeholder: "Select Item",
        ajax: {
            url: Ledgers.API + "product/list-product",
            dataType: 'json',
            delay: 250,
            data: function(params) {
                search_texts = params.term;
                return {
                    operation: 'list_product',
                    //type: custtype,
                    mode: 1,
                    q: params.term, // search term
                    page: params.page
                };
            },
            processResults: function(data, params) {
                for (var j = 0; j < 10; j++) {
                    items_fetch_data[item_fetch_count] = data['items'][j];
                    item_fetch_count++;
                }
                params.page = params.page || 1;
                return {
                    results: data.items,
                    pagination: {
                        more: (params.page * 10) < data.total_count
                    }
                };
            },
            cache: true
        },
        escapeMarkup: function(markup) {
            return markup;
        },
        language: {
            noResults: function(params) {
                if (search_texts != undefined && search_texts != '') {
                    return '<a href="#add-product" class="add_product_btn  " value="1"  >Add ' + search_texts + ' under Goods </a><br> <a href="#add-product"  class="add_product_btn" value="2">Add ' + search_texts + ' under Service</a>';
                }

            }
        },
        minimumInputLength: 0
      });
      $clone.find('tr').attr('item-id',item_count)
      $tr.after($clone);
    }
    if(inv_data['operation'] == "create-credit-note"){
      if(temp==1){
        $('#item_master_table_body tr:nth-child('+ (temp) +')').find('.item_act_btn_del').hide();
      }
    }
  });

  $('body').on('click', '.add_cust_btn', function () {
    $('#address_edit_model').modal('toggle');
    popup('customer', search_text);
    search_text = '';
  });
  
  $('body').on('click', '.add_product_btn', function() {
    var value = $(this).attr('value');
    popup("add-pro-service", search_texts, "", value)
    search_texts = '';
  });

  $("body").on("change", '.item_qty', function () {
    if ($(this).closest('tr').find('.item_qty').val() == "" || parseFloat($(this).closest('tr').find('.item_qty').val()) <= 0) {
      $(this).closest('tr').find('.item_qty').val(1);
    }
  });

  $("body").on("input", '.item_qty', function () {
    if ($(this).closest('tr').find('.item_qty').val() == "" || parseFloat($(this).closest('tr').find('.item_qty').val()) <= 0) {
      $(this).closest('tr').find('.item_qty').val(1).trigger('input');
      $(this).closest('tr').find('.item_qty').val('');
    }else{
      $(this).closest('tr').find('.item_rate').trigger('input');
    }
    
  });

  $("body").on("input", '.item_non_taxable , .item_descr ,.item_rate_qty, .item_rate ,  .item_disc , .item_igst_per ,  .item_sgst_per , .item_cgst_per , .item_gst_per , .item_cess_amt', function () {
    if((event.keyCode == 190 || event.keyCode == 110) && $(event.target).hasClass('item_rate')){
      return 0;
    }
     // var item_count = $(this).closest('tr').index();
     let index = $(this).closest('tr').index();
     var item_description = $(this).closest('tr').find('.item_descr').val();
     var item_code = $(this).closest('tr').find('.item_hsn').val();
     var quantity = $(this).closest('tr').find('.item_qty').val();
     if (quantity != '' && quantity > 0) {
       quantity = $(this).closest('tr').find('.item_qty').val();
     }else{
       $(this).closest('tr').find('.item_qty').val(1);
       quantity =$(this).closest('tr').find('.item_qty').val();
     }
     if(operation=="create-credit-note" && $(this).closest('tr').find('.item_qty').attr('qty_credit_max_limit')){
       cr_qty_lmt=$(this).closest('tr').find('.item_qty').attr('qty_credit_max_limit');
       if(quantity > cr_qty_lmt){
         alert("Cannot increased Quantity above invoice quantity");
         $(this).closest('tr').find('.item_qty').val(cr_qty_lmt);
         quantity =$(this).closest('tr').find('.item_qty').val();
       }
     }
    var item_type = parse_float_2($(this).closest('tr').find('.item_type').val());
    var discount = String($(this).closest('tr').find('.item_disc').val());
    var cgst_rate = parseFloat($(this).closest('tr').find('.item_gst_per').val() / 2).toFixed(2);
    var sgst_rate = parseFloat($(this).closest('tr').find('.item_gst_per').val() / 2).toFixed(2);
    var igst_rate = parseFloat($(this).closest('tr').find('.item_gst_per').val()).toFixed(2);
    var cgst_amt = parse_float_2($(this).closest('tr').find('.item_gst_amt').val() / 2);
    var sgst_amt = parse_float_2($(this).closest('tr').find('.item_gst_amt').val() / 2);
    var igst_amt = parse_float_2($(this).closest('tr').find('.item_gst_amt').val());
    var cess_amt = parse_float_2($(this).closest('tr').find('.item_cess_amt').val());
    var non_taxable_amt = parse_float_2($(this).closest('tr').find('.item_non_taxable').val());
    var other_currency = currency_rates[inv_data['invoice'][0]['currency']];
    
    if ($(this).closest('tr').find('.item_rate').val()) {
      if ($(this).closest('tr').find('.item_rate').val() % parseInt($(this).closest('tr').find('.item_rate').val()) == 0) {
        var rate = ($(this).closest('tr').find('.item_rate').val()).replace(/^0+/,"");
      } else {
        var rate = parse_float_2($(this).closest('tr').find('.item_rate').val());
      }
    }else{
      var rate = 0;
    }

    if(operation=="create-credit-note" && $(this).closest('tr').find('.item_rate').attr('rate_credit_max_limit')){
      cr_rate_lmt=$(this).closest('tr').find('.item_rate').attr('rate_credit_max_limit');
      if(rate > cr_rate_lmt){
        alert("Cannot increased Rate above invoice Rate");
        $(this).closest('tr').find('.item_rate').val(cr_rate_lmt);
        rate =$(this).closest('tr').find('.item_rate').val();
      }
    }
    
    var gst_rate = parseFloat($(this).closest('tr').find('.item_gst_per').val());
    if (gst_type == 0) {
      cgst_rate = 0;
      sgst_rate = 0;
      igst_rate = 0;
      cgst_amt = 0;
      sgst_amt = 0;
      igst_amt = 0;
    }
    if (gst_type == 1) {
      igst_rate = 0;
      igst_amt = 0;
    }
    if (gst_type == 2) {
      cgst_rate = 0;
      sgst_rate = 0;
      cgst_amt = 0;
      sgst_amt = 0;
    }

    if (quantity != '' && quantity != 0) {
      quantity = parseFloat(quantity);
      var single_non_taxable_amt = parse_float_2($(this).closest('tr').find('.item_non_taxable').attr('single_non_tax'));

      if (inv_data['invoice'][0]['items'][index]['nill_rate'] == 1) {
        $(this).closest('tr').find('.item_non_taxable').attr('single_non_tax', non_taxable_amt / quantity);
        single_non_taxable_amt = non_taxable_amt / quantity;
        var taxable_amt = (rate * quantity) - (single_non_taxable_amt * quantity);
      }
      non_taxable_amt = parse_float_2(single_non_taxable_amt * quantity);
    } else {
      $(this).closest('tr').find('.item_qty').val(0);
    }
    var disc_per = 0;
    var disc_amt = 0;
    if(discount){
    if (discount.match('%')) {
      disc_per = discount.split('%');
      disc_amt = (((rate - single_non_taxable_amt) * disc_per[0]) / 100) * quantity;
    } else {
      disc_amt = parse_float_2(discount);
    }
    }else{
      disc_amt = 0;
    }
    var taxable_amt = parse_float_2(((rate * quantity) - disc_amt) - non_taxable_amt);

    if (taxable_amt < 0) {
      discount = 0;
      disc_amt = 0;
      $(this).closest('tr').find('.item_disc').val('0');
      toastr.error('Item Total value in negative not allowed');
    }
    
    var cgst_amt = parseFloat(taxable_amt * (cgst_rate / 100));
    var sgst_amt = parseFloat(taxable_amt * (sgst_rate / 100));
    var igst_amt = parse_float_2(taxable_amt * (igst_rate / 100));
    cess_amt = parse_float_2(quantity * (cess_amt/quantity));
    var item_total_amt = parse_float_2(non_taxable_amt + (parse_float_2(taxable_amt + cgst_amt)) + sgst_amt + igst_amt + cess_amt);
    if(inv_data['invoice'][0]['currency'] != 'INR') {
      $(this).closest('tr').find('.item_sno').attr('item_rate_inr', parse_float_2(rate/other_currency));
      $(this).closest('tr').find('.item_sno').attr('item_taxable_inr', parse_float_2((rate -single_non_taxable_amt )/other_currency));
      $(this).closest('tr').find('.item_sno').attr('item_nontax_inr', single_non_taxable_amt/other_currency);
      // $(this).closest('tr').find('.item_sno').attr('single_non_tax', single_non_taxable_amt/other_currency);
    }

    $(this).closest('tr').find('.item_rate_qty').val(parseFloat(rate * quantity).toFixed(decimal_point));
    $(this).closest('tr').find('.item_rate').val(rate);
    $(this).closest('tr').find('.item_disc').val(discount);
    $(this).closest('tr').find('.item_taxable').val(taxable_amt);
    $(this).closest('tr').find('.item_non_taxable').val(non_taxable_amt);
    $(this).closest('tr').find('.item_cgst_per').val(cgst_rate);
    $(this).closest('tr').find('.item_cgst_amt').val(cgst_amt);
    $(this).closest('tr').find('.item_sgst_per').val(sgst_rate);
    $(this).closest('tr').find('.item_sgst_amt').val(sgst_amt);
    $(this).closest('tr').find('.item_igst_per').val(igst_rate);
    $(this).closest('tr').find('.item_igst_amt').val(igst_amt);
    $(this).closest('tr').find('.item_gst_per').val(gst_rate);
    $(this).closest('tr').find('.item_gst_amt').val(parseFloat((parse_float_2(sgst_amt + cgst_amt)) + igst_amt).toFixed(decimal_point));
    $(this).closest('tr').find('.item_cess_amt').val(cess_amt);
    $(this).closest('tr').find('.item_total').val(parseFloat(item_total_amt).toFixed(decimal_point));
    $(this).closest('tr').find('.item_sno').attr('item_total_amt', parseFloat(item_total_amt).toFixed(decimal_point));

    // let index = $(this).closest('tr').index()
    // inv_data['invoice'][0]['items'][index]['id'] = 0;
    // inv_data['invoice'][0]['items'][index]['inv_id'] = inv_id;
    // inv_data['invoice'][0]['items'][index]['pid'] = pid;
    // inv_data['invoice'][0]['items'][index]['sku'] = sku;
    // inv_data['invoice'][0]['items'][index]['item_name'] = item_name;
    inv_data['invoice'][0]['items'][index]['item_description'] = item_description;
    inv_data['invoice'][0]['items'][index]['item_code'] = item_code;
    inv_data['invoice'][0]['items'][index]['item_type'] = item_type;
    inv_data['invoice'][0]['items'][index]['quantity'] = quantity;
    inv_data['invoice'][0]['items'][index]['rate'] = rate;
    inv_data['invoice'][0]['items'][index]['discount'] = discount;
    inv_data['invoice'][0]['items'][index]['taxable_amt'] = taxable_amt;
    inv_data['invoice'][0]['items'][index]['non_taxable_amt'] = non_taxable_amt;
    inv_data['invoice'][0]['items'][index]['gst_rate'] = gst_rate;
    inv_data['invoice'][0]['items'][index]['igst_rate'] = igst_rate;
    inv_data['invoice'][0]['items'][index]['cgst_rate'] = cgst_rate;
    inv_data['invoice'][0]['items'][index]['sgst_rate'] = sgst_rate;
    inv_data['invoice'][0]['items'][index]['igst_amt'] = igst_amt;
    inv_data['invoice'][0]['items'][index]['cgst_amt'] = cgst_amt;
    inv_data['invoice'][0]['items'][index]['sgst_amt'] = sgst_amt;
    inv_data['invoice'][0]['items'][index]['cess_amt'] = cess_amt;
    inv_data['invoice'][0]['items'][index]['item_total_amt'] = parse_float_2(item_total_amt);
    inv_data['invoice'][0]['items'][index]['item_scr'] = '';
    inv_data['invoice'][0]['items'][index]['nill_rate'] = item_nill_rate;
    inv_data['invoice'][0]['items'][index]['other_than_gst'] = item_other_than_gst;
    final_charges_alter();
  });

  // BEGIN Edit Product Model Data
  $('#item_per_rate_qty').on('input',function () {
    let index = parseInt($('#item_name').attr('item_index'));
    if($('#item_per_rate_qty').val() && $('#item_per_rate_qty').val() > 0 && $('#item_quantity').val() && $('#item_quantity').val() > 0 ){
        $('#item_per_rate').val(parse_float_2($('#item_per_rate_qty').val()/$('#item_quantity').val()));
    }else{
      load_model_item(index);
    }
  });

  $('#item_quantity').on('input',function () {
    if($('#item_per_rate_qty').val() && $('#item_per_rate_qty').val() > 0 && $('#item_quantity').val() && $('#item_quantity').val() > 0){
      $('#item_per_rate_qty').val(parse_float_2($('#item_per_rate').val()*$('#item_quantity').val()));
      $('#item_per_rate').val(parse_float_2($('#item_per_rate_qty').val()/$('#item_quantity').val()));
      }else{
        let index = parseInt($('#item_name').attr('item_index'));
        load_model_item(index);
      }
  });
  
  $('#item_taxable_amount').on('change',function () {
    let index = parseInt($('#item_name').attr('item_index'));
    if($('#item_taxable_amount').val() && $('#item_taxable_amount').val() > 0 ){
      var disc_per_num = 1;
      if ($('#item_discount_amount').val()) {
        if ($('#item_discount_amount').val().match('%')) {
          var disc_per = $('#item_discount_amount').val().split('%');
          var disc_amt = parse_float_2(((($('#item_per_rate').val() - $('#item_non_taxable_amount_per').val()) * disc_per[0]) / 100) * $('#item_quantity').val());
          disc_per_num = parse_float_2(disc_per[0]);
        } else {
          var disc_amt = parse_float_2($('#item_discount_amount').val());
        }
      }else{
        disc_amt = 0;
      }
      var cal_rate=(parse_float_2($('#item_taxable_amount').val()) + disc_amt + parse_float_2($('#item_non_taxable_amount').val()))/$('#item_quantity').val();
      $('#item_per_rate').val(cal_rate);
      $('#item_per_rate').trigger('change');
    }else{
      load_model_item(index);
    }
  });
  
  $('#item_description,#item_per_rate_qty, #item_per_rate,#item_quantity, #item_gst_per_rate, #item_cgst_amount, #item_sgst_amount, #item_igst_amount,  #item_discount_amount, #item_cess_amount').on('change',function () {

    let index = parseInt($('#item_name').attr('item_index'));
    var disc_per_num = 1;
    if ($('#item_discount_amount').val()) {
      if ($('#item_discount_amount').val().match('%')) {
        var disc_per = $('#item_discount_amount').val().split('%');
        var disc_amt = parse_float_2(((($('#item_per_rate').val() - $('#item_non_taxable_amount_per').val()) * disc_per[0]) / 100) * $('#item_quantity').val());
        disc_per_num = parse_float_2(disc_per[0]);
      } else {
        var disc_amt = parse_float_2($('#item_discount_amount').val());
      }
    }else{
      disc_amt = 0;
    }
    if(disc_amt >= 0){
      if(disc_per_num <= 100 && disc_per_num > 0){
        if($('#item_non_taxable_amount_per').val() <= parse_float_2($('#item_per_rate').val())){
          if(disc_amt/$('#item_quantity').val() <= parse_float_2($('#item_per_rate').val())-$('#item_non_taxable_amount_per').val()){

            if($('#item_per_rate').val() && $('#item_per_rate').val() > 0 && $('#item_per_rate_qty').val() && $('#item_per_rate_qty').val() > 0){
              // $('#item_per_rate').val(parse_float_2($('#item_per_rate_qty').val()/$('#item_quantity').val()));
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_rate').val($('#item_per_rate').val());
            }
            if($('#item_per_rate_qty').val() && $('#item_per_rate_qty').val() > 0){
            $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_rate_qty').val(parse_float_2($('#item_per_rate_qty').val()));
            }
            if($('#item_description').val()){
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_descr').val($('#item_description').val());
            }
            if($('#item_quantity').val() && $('#item_quantity').val() > 0){
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_qty').val($('#item_quantity').val());
            }
            if($('#item_discount_amount').val()){
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_disc').val($('#item_discount_amount').val());
            }
            if($('#item_gst_per_rate').val() && $('#item_gst_per_rate').val() > 0){
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_gst_per').val($('#item_gst_per_rate').val());
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.gst_per_rate').html(string_preg($('#item_gst_per_rate').val())+"%");
            }
            if($('#item_taxable_amount').val() && $('#item_taxable_amount').val() > 0){
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_taxable').val($('#item_taxable_amount').val());
            }
            if($('#item_cess_amount').val() && $('#item_cess_amount').val() >= 0){
              $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_cess_amt').val($('#item_cess_amount').val());
            }
            $('#item_master_table_body tr:nth-child('+ (index+1) +')').find('.item_rate').trigger('input');
            load_model_item(index);
          }else{
            alert("Discount Cannot be Greater than Taxable");
            load_model_item(index);
          }
        }else{
        alert("Rate Cannot be Lesser than Non GST Amount");
        load_model_item(index);
        }
      }else{
        alert("Discount Should Be 1% to 100%");
        load_model_item(index);
      }
    }else{
      alert("Discount Cannot be Negative");
      load_model_item(index);
    }
  });

  function load_model_item(index){
    var item_details = inv_data['invoice'][0]['items'][index];
    $('#item_name').attr('item_index', index);
    $("#item_edit_model label[id='item_name']").html(item_details['item_name']);
    $("#item_edit_model label[name='item_description']").html(item_details['item_description']);
    $("#item_edit_model input[name='item_quantity']").val(item_details['quantity']);
    $("#item_edit_model input[name='item_per_rate']").val(item_details['rate']);
    $("#item_edit_model input[name='item_per_rate_qty']").val(parse_float_2(item_details['rate']*item_details['quantity']));
    $("#item_edit_model input[name='item_discount_amount']").val(item_details['discount']);
    $("#item_edit_model input[name='item_taxable_amount']").val(item_details['taxable_amt']);
    $("#item_edit_model input[name='item_non_taxable_amount']").val(item_details['non_taxable_amt']);
    $("#item_edit_model input[name='item_non_taxable_amount_per']").val(parse_float_2(item_details['non_taxable_amt']/item_details['quantity']));
    if(item_details['non_taxable_amt']==0){
      $("#item_edit_model").find('.nontax').hide();
    }else{
      $("#item_edit_model").find('.nontax').show();
    }
    $("#item_edit_model select[name='item_gst_per_rate']").val(item_details['gst_rate']);
    $("#item_edit_model input[name='item_cgst_amount']").val(item_details['sgst_amt']);
    $("#item_edit_model input[name='item_sgst_amount']").val(item_details['cgst_amt']);
    $("#item_edit_model input[name='item_igst_amount']").val(item_details['igst_amt']);
    $("#item_edit_model input[name='item_gst_amount']").val(parse_float_2(item_details['sgst_amt'] + item_details['cgst_amt'] +item_details['igst_amt']));
    $("#item_edit_model input[name='item_cess_amount']").val(item_details['cess_amt']);
    $("#item_edit_model input[name='item_total_amount']").val(parse_float_2(item_details['item_total_amt']));
  }

  $("body").on("click", '.item_rate,.item_rate_qty, .item_gst_amt',function() {
    let index = $(this).closest('tr').index();
    if(operation != "create-credit-note"){
      load_model_item(index);
      $('#item_edit_model').modal('toggle');
    }
  });

  $("body").on("click", '.item_act_btn_edit',function() {
    var customer_name = $("#customer_name").html();
    if (customer_name == 'Customer Name') {
      $("#address_edit_model input[id='cust_name_edit']").val('');
    } else {
      $("#address_edit_model input[id='cust_name_edit']").val(customer_name);
    }
    var customer_business_name = $("#customer_business_name").html();
    if (customer_business_name == 'Business Name') {
      $("#address_edit_model input[id='cust_busi_name_edit']").val('');
    } else {
      $("#address_edit_model input[id='cust_busi_name_edit']").val(customer_business_name);
    }
    var cust_gst = $("#cust_gst").html();
    if (cust_gst == 'Update GSTIN') {
      $("#address_edit_model input[id='cust_gst_edit']").val('');
    } else {
      $("#address_edit_model input[id='cust_gst_edit']").val(cust_gst);
    }
    var bill_add_1 = $("#bill_add_1").html();
    if (bill_add_1 == 'Address Line 1') {
      $("#address_edit_model input[id='bill_add_1_edit']").val('');
    } else {
      $("#address_edit_model input[id='bill_add_1_edit']").val(bill_add_1);
    }
    var bill_add_2 = $("#bill_add_2").html();
    if (bill_add_2 == 'Address Line 2') {
      $("#address_edit_model input[id='bill_add_2_edit']").val('');
    } else {
      $("#address_edit_model input[id='bill_add_2_edit']").val(bill_add_2);
    }
    var bill_city = $("#bill_city").html();
    if (bill_city == 'City') {
      $("#address_edit_model input[id='bill_city_edit']").val('');
    } else {
      $("#address_edit_model input[id='bill_city_edit']").val(bill_city);
    }
    var bill_pin = $("#bill_pin").html();
    if (bill_pin == 'Pincode') {
      $("#address_edit_model input[id='bill_pin_edit']").val('');
    } else {
      $("#address_edit_model input[id='bill_pin_edit']").val(bill_pin);
    }
    var bill_country = $("#bill_country").html();
    if (bill_country != 'Country') {
      $("#address_edit_model select[id='bill_country_edit']").val(bill_country).trigger('change');
    }
    if($("#bill_country").html()=="INDIA"){
      var bill_state = $("#bill_state").html();
      $(".bill_state_edit_data").show();
      $(".bill_state_edits_data").hide();
      if (bill_state != 'State') {
        $("#address_edit_model select[id='bill_state_edit']").val(bill_state).trigger('change');
      }
    }else{
      var bill_state_region = $("#bill_state").html();
      $(".bill_state_edits_data").show();
      $(".bill_state_edit_data").hide();
      if (bill_state_region != 'State') {
        $("#address_edit_model input[id='bill_state_edits']").val(bill_state_region);
      }
    }
    var ship_add_1 = $("#ship_add_1").html();
    if (ship_add_1 == 'Address Line 1') {
      $("#address_edit_model input[id='ship_add_1_edit']").val('');
    } else {
      $("#address_edit_model input[id='ship_add_1_edit']").val(ship_add_1);
    }
    var ship_add_2 = $("#ship_add_2").html();
    if (ship_add_2 == 'Address Line 2') {
      $("#address_edit_model input[id='ship_add_2_edit']").val('');
    } else {
      $("#address_edit_model input[id='ship_add_2_edit']").val(ship_add_2);
    }
    var ship_city = $("#ship_city").html();
    if (ship_city == 'City') {
      $("#address_edit_model input[id='ship_city_edit']").val('');
    } else {
      $("#address_edit_model input[id='ship_city_edit']").val(ship_city);
    }
    var ship_pin = $("#ship_pin").html();
    if (ship_pin == 'Pincode') {
      $("#address_edit_model input[id='ship_pin_edit']").val('');
    } else {
      $("#address_edit_model input[id='ship_pin_edit']").val(ship_pin);
    }
    var ship_country = $("#ship_country").html();
    if (ship_country != 'Country') {
      $("#address_edit_model select[id='ship_country_edit']").val(ship_country).trigger('change');
    }
    if($("#ship_country").html()=="INDIA"){
      var ship_state = $("#ship_state").html();
      $(".ship_state_edit_data").show();
      $(".ship_state_edits_data").hide();
      if (ship_state != 'State') {
        $("#address_edit_model select[id='ship_state_edit']").val(ship_state).trigger('change');
      } 
    }else{
      var ship_state_region = $("#ship_state").html();
      $(".ship_state_edits_data").show();
      $(".ship_state_edit_data").hide();
      if (ship_state_region != 'State') {
        $("#address_edit_model input[id='ship_state_edits']").val(ship_state_region);
      }
    }
    $('#address_edit_model').modal('toggle');
    if($('.customer_list').val()){
      $('#cust_name_edit').prop('disabled', false);
      $('#cust_gst_edit').prop('disabled', false);
      // if($('#zero_rated').val()!=1){
        $('#pos_name_edit').prop('disabled', false);
      // }
      $('#cust_busi_name_edit').prop('disabled', false);
      $('#customer_bill_branch_list').prop('disabled', false);
      $('#customer_branch_list').prop('disabled', false);
      $('#bill_add_1_edit').prop('disabled', false);
      $('#bill_add_2_edit').prop('disabled', false);
      $('#bill_city_edit').prop('disabled', false);
      $('#bill_pin_edit').prop('disabled', false);
      $('#bill_state_edit').prop('disabled', false);
      $('#bill_state_edits').prop('disabled', false);
      $('#ship_add_1_edit').prop('disabled', false);
      $('#ship_add_2_edit').prop('disabled', false);
      $('#ship_city_edit').prop('disabled', false);
      $('#ship_pin_edit').prop('disabled', false);
      $('#ship_state_edits').prop('disabled', false);
      $('#ship_state_edit').prop('disabled', false);
      if($('#zero_rated').val()!=0){
        $('#ship_country_edit').prop('disabled', false);
        $('#bill_country_edit').prop('disabled', false);
      }
      $('.customer_list').select2('close');
    }else{
      $('.customer_list').select2('open');
    }
  });
  // END Edit Product Model Data

  // BEGIN Edit Adderss Model Data
  $('#bill_pin_edit').on('change',function () {
    var bill_pin = string_preg($("#bill_pin_edit").val());
    var loc_details = pincode_api(bill_pin);
    if (loc_details != 4) {
      $("#address_edit_model input[id='bill_city_edit']").val(loc_details['data'][0]['district']);
      $("#address_edit_model select[id='bill_country_edit']").val(loc_details['data'][0]['country']).trigger('change');
      $("#address_edit_model select[id='bill_state_edit']").val(loc_details['data'][0]['state']).trigger('change');
    }
  });

  $('#ship_pin_edit').on('change',function () {
    var ship_pin = string_preg($("#ship_pin_edit").val());
    var loc_details = pincode_api(ship_pin);
    if (loc_details != 4) {
      $("#address_edit_model input[id='ship_city_edit']").val(loc_details['data'][0]['district']);
      $("#address_edit_model select[id='ship_country_edit']").val(loc_details['data'][0]['country']).trigger('change');
      $("#address_edit_model select[id='ship_state_edit']").val(loc_details['data'][0]['state']).trigger('change');
      $("#pos_name_edit").val(loc_details['data'][0]['state']);
    }
  });

  $('#bill_country_edit').on('change',function () {
    if($("#address_edit_model select[id='bill_country_edit']").val() != "INDIA"){
      $(".bill_state_edit_data").hide();
      $(".bill_state_edits_data").val("");
      $(".bill_state_edits_data").show();
      $('#bill_pin_edit').attr('type', 'text');
    }else{
      $(".bill_state_edit_data").show();
      $(".bill_state_edits_data").hide();
      $('#bill_pin_edit').attr('type', 'number');
    }
  });
  
  $('#ship_country_edit').on('change',function () {
    if($("#address_edit_model select[id='ship_country_edit']").val() != "INDIA"){
      // $("#pos_name_edit").val("INTERNATIONAL");
      $(".ship_state_edit_data").hide();
      $(".ship_state_edits_data").val("");
      $(".ship_state_edits_data").show();
      $('#ship_pin_edit').attr('type', 'text');
    }else{
      $(".ship_state_edit_data").show();
      $(".ship_state_edits_data").hide();
      $('#ship_pin_edit').attr('type', 'number');
      // $("#pos_name_edit").val($("#ship_state_edit").val());
    }
  });
  // END Edit Adderss Model Data

  $("body").on('click','.item_editview_close', function(){
    $('.quickview_sec1').css('display','none');
    $('.quickview_overlay1').css('display','none');
  });

  $("body").on("click", '.item_act_btn_del',function() {
    let index = $(this).closest('tr').index()
    inv_data['invoice'][0]['items'].splice(index,1);
    $(this).closest('tr').remove();
    item_count--;
    inv_data['invoice'][0]['num_items']--;
    final_charges_alter();
    if(inv_data['operation'] == "create-credit-note"){
      if(inv_data['invoice'][0]['items'].length==1){
        $('#item_master_table_body tr:nth-child('+ (inv_data['invoice'][0]['items'].length) +')').find('.item_act_btn_del').hide();
      }
    }
  });

  $("#notify_settings, #notify_settings-copy").change(function () {
    var notify_settings = $(this).val();
    var not_1 = '';
    var not_2 = '';
    if (notify_settings == 0) {
      var not_1 = 'Create';
      var not_2 = ' Only';
      $('#split_pay_btn').attr('disabled', 'disabled');
    } else if (notify_settings == 1) {
      var not_1 = 'Email ';
      var not_2 = 'without payment link';
      $('#split_pay_btn').attr('disabled', 'disabled');
    } else if (notify_settings == 2) {
      var not_1 = 'Email ';
      var not_2 = ' with payment link';
      $('#split_pay_btn').removeAttr('disabled');
    } else if (notify_settings == 3) {
      var not_1 = 'SMS ';
      var not_2 = ' with payment link';
      $('#split_pay_btn').removeAttr('disabled');
    } else if (notify_settings == 4) {
      var not_1 = 'Email & SMS ';
      var not_2 = ' with payment link';
      $('#split_pay_btn').removeAttr('disabled');
    } else if (notify_settings == 5) {
      var not_1 = 'SMS ';
      var not_2 = ' without payment link';
      $('#split_pay_btn').attr('disabled', 'disabled');
    } else if (notify_settings == 6) {
      var not_1 = 'Email & SMS ';
      var not_2 = ' without payment link';
      $('#split_pay_btn').attr('disabled', 'disabled');
    } else {
      var not_1 = 'Create ';
      var not_2 = ' Only';
      $('#split_pay_btn').attr('disabled', 'disabled');
    }
    if (operation == 'create-invoice' || operation == 'convert-invoice' || operation == 'copy-invoice' || operation == 'export-invoice') {
      $('.doc_type_btn').html(not_1 + ' Invoice ' + not_2);
      var t = 'invoice';
    } else if (operation == 'create-bill-of-supply' || operation == 'create-bill') {
      $('.doc_type_btn').html(not_1 + ' Bill ' + not_2);
      var t = 'bill';
    } else if (operation == 'create-estimate') {
      $('.doc_type_btn').html(not_1 + ' Estimate ' + not_2);
      var t = 'estimate';
    } else if (operation == 'create-dc') {
      $('.doc_type_btn').html(not_1 + ' DC ' + not_2);
      var t = 'dc';
    } else if (operation == 'create-credit-note') {
      $('.doc_type_btn').html(not_1 + ' Credit-Note ' + not_2);
      var t = 'credit-note';
    }
    $("#notify_settings, #notify_settings-copy").val(notify_settings);
  });
 
  $("#invoice-btn, #invoice-btn-copy, .create-invoice-btn").click(function () {
    if (inv_data['invoice'][0]['total_amt'] < 1) {
      // toastr.error('Total cannot be negative or zero');
      block_inv = 1;
      return 0;
    }
    if (inv_data['invoice'][0]['cust_id'] == '') {
      toastr.error('Please select customer');
      block_inv = 1;
      return 0;
    }
    if (inv_data['invoice'][0]['inv_number'] == '' || inv_data['invoice'][0]['inv_number'].length == 0) {
      toastr.error('Invoice Number is empty');
      block_inv = 1;
      return 0;
    }
    if (inv_data['invoice'][0]['inv_date'] == '' || inv_data['invoice'][0]['inv_date'].length == 0) {
      toastr.error('Invoice Date is empty');
      block_inv = 1;
      return 0;
    }
    if (inv_data['invoice'][0]['terms_conditions'] !== undefined && inv_data['invoice'][0]['terms_conditions'].length + inv_data['invoice'][0]['notes'].length > 997) {
      toastr.error('Terms and conditions and notes not more than 1000 character');
      block_inv = 1;
      return 0;
    }
    if (inv_data['invoice'][0]['inv_due_date'] == '' || inv_data['invoice'][0]['inv_due_date'].length == 0) {
      toastr.error('Due date is empty');
      block_inv = 1;
      return 0;
    }
    if (item_count == 0) {
      toastr.error('Please add atleast one item to create invoice');
      block_inv = 1;
      return 0;
    }
    var zero_rated = $("#zero_rated").val();
    if (zero_rated > 0) {
      if ($("#ship_bill_no").val() == '' || $("#ship_port_code").val() == '') {
        toastr.warning('Shipping Bill No (or) Shipping Port Code is Empty');
      }
      if(zero_rated == 1 && $("#export_bond_status").val() == 0){
        toastr.warning("Export Bond or Letter of Undertaking cannot be NO during Zero rated supply is Exports");
      }
    }

    if (final_total_amt < 0) {
      block_inv = 1;
      // toastr.error('Total cannot be negative')
      return 0;
    }

    if (final_total_amt > 0) {
      block_inv = 0;
    }
    if (inv_data['invoice'][0]['cust_id'] != '' && final_total_amt >= 0) {
      block_inv = 0;
    }
    if (item_count > 0) {
      block_inv = 0;
    }
    
    if (block_inv == 0) {
      inv_create();
    }

  });

  //START Currency Change 
  $('#currency_list').change(function() {
    $.ajax({
      type: "POST",
      url: Ledgers.APP + "/public/api/currency_rates",
      dataType: "JSON",
      data: {
        operation: 'currency_rate',
        date : inv_data['invoice'][0]['inv_date']
      },
      async: false,
      success: function (response) {
        if(response.status ==  1) {
          currency_rates = response.data['rates'];
          if(response.data['base'] != 'INR'){
            convert_base_INR();
          }
          $('.currency-flag').removeClass('currency-flag-'+inv_data['invoice'][0]['currency'].toLowerCase());
          var old_currency_flag=inv_data['invoice'][0]['currency'];
          inv_data['invoice'][0]['currency'] = $('#currency_list').val();
          $('.currency-flag').addClass('currency-flag-'+inv_data['invoice'][0]['currency'].toLowerCase());
          $('#currency_text, .currency_text').html(inv_data['invoice'][0]['currency']);
          var old_currency_rate=inv_data['invoice'][0]['currency_rate'];
          inv_data['invoice'][0]['currency_rate'] = currency_rates[inv_data['invoice'][0]['currency']];
          if(inv_data['invoice'][0]['currency'] != 'INR') {
            $("#export_bond_status").val(1).trigger('change');
            $("#export_bond_status").prop('disabled', true);
          }
          for (var y = 0; y < item_count; y++) {
            let discount  = $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_disc').val();
            if(discount){
              if (discount.match('%')) {
                discount =discount;
              } else {
                if(inv_data['invoice'][0]['currency'] == 'INR') {
                  discount =discount;
                }else{
                  discount  = parse_float_2(discount/old_currency_rate);
                }
                discount = parse_float_2(discount * inv_data['invoice'][0]['currency_rate']);
              }
            }else{
              discount = 0;
            }
            $('#item_master_table_body tr:nth-child('+ (y+1) +')').find('.item_disc').val(discount);
          }
          final_charges_alter();
        } else {
          alert({
            'type': 'warning',
            'msg' : 'Currency rates not available. please try again'
          }); 
        }
      }
    })
  });
  //END Currency Change

  // Begin Additional charges
  $('#add-new-charges').click(function() {
    $("#add-new-charges-modal").modal('show');
  });

  $('#add-new-charges-save').click(function() {
    charges = $("#new-charges").val();
    $.ajax({
        type: "POST",
        url: Ledgers.API + "business/helper-service",
        dataType: "json",
        data: {
            'operation': 'add-new-charges',
            'charges': charges
        },
        success: function(return_data) {
            if (return_data['status'] == 1) {
                alert({
                    'type': 'success',
                    'msg': return_data['message']
                });
                $("#add-new-charges-modal").modal('hide');
                $("#new-charges").val('');
                // preload_documnets();
                $('#additional_charges').append('<option value=' + charges + ' selected="selected">' + charges + '</option>');
                $("#additional_charges").val(charges).trigger('change');
            } else {
                alert({
                    'type': 'danger',
                    'msg': return_data['message']
                });
            }
        }
    });
  });
  // END Additional charges

  //$('#split_pay_btn').attr('disabled','disabled');
  $('#split_pay_btn').click(function() {
      notify_settings = $('#notify_settings').val();
      if (notify_settings == 0 || notify_settings == 1) {
          $('#split_pay_btn').attr('disabled', 'disabled');
          alert({
              'msg': 'Split Payment is only with Email with payment link option',
              'type': 'danger'
          });
      } else if (notify_settings == 2) {
          $('#split_pay_btn').removeAttr('disabled');
      }
  });

  $('body').on('click', '.add_split_btn', function() {
      if (split_inner_id < 4) {
          split_inner_id++;
          split_sno = split_inner_id + 1;
          $('#split_table_body').append('<tr split_id=' + split_inner_id + '>' +
              '<td split_inner_id=' + split_inner_id + ' style="text-align:center;">' + split_sno + '</td>' +
              '<td split_inner_id=' + split_inner_id + ' ><input  split_inner_id=' + split_inner_id + '  style="text-align:right;color:black;padding-right:4px;" type="number" min="0" class="form-control m-input form-control-sm split_pay split_pay_amt" value="0" step="0.01" id="a"></td>' +
              '<td  split_inner_id=' + split_inner_id + '>' +
              '<input split_inner_id=' + split_inner_id + '  style="color:black;!important;text-align:right;" type="text" class="form-control m-input form-control-sm split_pay split_pay_date" placeholder="Date" id="">' +
              '</td>' +
              '<td  split_inner_id=' + split_inner_id + ' ><input split_inner_id=' + split_inner_id + '  style="text-align:right;color:black;padding-right:4px;" type="text" class="form-control m-input form-control-sm split_pay split_pay_name" value=""  id=""></td>' +
              '<td  split_inner_id=' + split_inner_id + ' ><input split_inner_id=' + split_inner_id + '  style="text-align:right;color:black;padding-right:4px;" type="email" class="form-control m-input form-control-sm split_pay split_pay_email" value=""  id=""></td>' +
              '<td split_inner_id=' + split_inner_id + ' style="text-align:center;" ></td>' +
              /*'<td split_inner_id='+split_inner_id+' style="text-align:center;"><a href="#" class="btn btn-outline-danger m-btn btn-sm m-btn--icon m-btn--icon-only">'+
              '<i class="la la-trash-o"></i></a></td>'+*/
              '</tr>');
          split_data.push({
              "id": split_sno,
              "active": 1,
              "amt": 0,
              "pay_status": 0,
              "date": today_date,
              "name": "",
              "email": ""
          });
          $('.split_pay_date').datepicker({
              format: 'dd-mm-yyyy',
              autoclose: true
          });
      } else {
          alert({
              'msg': 'Cannot Split More Than 5 Times',
              'type': 'warning'
          });

      }

  });

  $('body').on('change', '.split_pay', function() {
      if ($('#split_enable_btn').is(":checked")) {

      } else {
          alert({
              'msg': 'Enable Split Pay Button on Top',
              'type': 'warning'
          });
          for (var i = 0; i <= split_inner_id; i++) {
              split_total_amt = split_total_amt + parse_float_2($('[split_id="' + i + '"] .split_pay_amt').val(0));
              split_data[i]['amt'] = 0;
          }
          $('#split_save_btn').removeAttr('disabled');
      }

      var split_id = $(this).attr('split_inner_id');
      var split_amt = parse_float_2($('[split_id="' + split_id + '"] .split_pay_amt').val());
      var split_date = $('[split_id="' + split_id + '"] .split_pay_date').val();
      var split_name = $('[split_id="' + split_id + '"] .split_pay_name').val();
      var split_email = $('[split_id="' + split_id + '"] .split_pay_email').val();
      if (split_date == '') {
          alert({
              'msg': 'Due Date is empty',
              'type': 'warning'
          });
          $(this).val(0);
          split_data[split_id]['amt'] = 0;
          return 0;
      }
      var split_date_0 = split_date.split("-");

      split_due_date = split_date_0[2] + "-" + split_date_0[1] + "-" + split_date_0[0];
      split_data[split_id]['date'] = split_due_date;
      if (split_amt < 0) {
          split_amt = 0;
          $('[split_id="' + split_id + '"] .split_pay_amt').val(0);
          split_data[split_id]['amt'] = 0;
          return 0;
      }

      split_data[split_id]['amt'] = split_amt;
      split_data[split_id]['name'] = split_name;
      split_data[split_id]['email'] = split_email;

      split_total_amt = 0;
      for (var i = 0; i <= split_inner_id; i++) {
          split_total_amt = split_total_amt + parse_float_2($('[split_id="' + i + '"] .split_pay_amt').val());
      }
      if (split_total_amt > inv_data['invoice'][0]['total_amt']) {
          alert({
              'msg': 'Split Total Must Be Equal To Total Amount',
              'type': 'warning'
          });
      }
      if (split_total_amt == inv_data['invoice'][0]['total_amt']) {
          $('#split_save_btn').removeAttr('disabled');
      } else {
          $('#split_save_btn').attr('disabled', 'disabled');
      }

  });

  $('#split_save_btn').click(function() {
      if ($('#split_enable_btn').is(":checked")) {
          if (split_total_amt == inv_data['invoice'][0]['total_amt']) {
              $('#split_modal_1').modal('toggle');
          } else {
              alert({
                  'msg': 'Split Total Must Be Equal To Total Amount',
                  'type': 'warning'
              });
          }
      } else {
          $('#split_modal_1').modal('toggle');
      }
  });

  $('#address_save_btn').click(function() {

    // var pos_val=string_preg($("#pos_name_edit").val());
    var cust_business_name = string_preg($("#cust_busi_name_edit").val());
    var cust_name = string_preg($("#cust_name_edit").val());
    var cust_gstin = string_preg($("#cust_gst_edit").val());
    var bill_add_1 = string_preg($("#bill_add_1_edit").val());
    var bill_add_2 = string_preg($("#bill_add_2_edit").val());
    var bill_city = string_preg($("#bill_city_edit").val());
    var bill_pin = string_preg($("#bill_pin_edit").val());
    var bill_country = string_preg($("#bill_country_edit").val());
    if(cust_name!="" || cust_business_name!=""){
      if(bill_country=="INDIA"){
        var bill_state = string_preg($("#bill_state_edit").val());
      }else{
        var bill_state = string_preg($("#bill_state_edits").val());
      }
      var ship_add_1 = string_preg($("#ship_add_1_edit").val());
      var ship_add_2 = string_preg($("#ship_add_2_edit").val());
      var ship_city = string_preg($("#ship_city_edit").val());
      var ship_pin = string_preg($("#ship_pin_edit").val());
      var ship_country = string_preg($("#ship_country_edit").val());
      if(ship_country=="INDIA"){
        var ship_state = string_preg($("#ship_state_edit").val());
      }else{
        var ship_state = string_preg($("#ship_state_edits").val());
      }
      
      // inv_data['invoice'][0]['cust_pos'] = pos_val
      inv_data['invoice'][0]['cust_business_name'] = cust_business_name;
      inv_data['invoice'][0]['cust_name'] = cust_name;
      inv_data['invoice'][0]['bill_company'] = cust_name;
      inv_data['invoice'][0]['ship_company'] = cust_name;
      inv_data['invoice'][0]['cust_gstin'] = cust_gstin;
      inv_data['invoice'][0]['bill_addr1'] = bill_add_1;
      inv_data['invoice'][0]['bill_addr2'] = bill_add_2;
      inv_data['invoice'][0]['bill_city'] = bill_city;
      inv_data['invoice'][0]['bill_pincode'] = bill_pin;
      inv_data['invoice'][0]['bill_country'] = bill_country;
      inv_data['invoice'][0]['bill_state'] = bill_state;
      inv_data['invoice'][0]['ship_addr1'] = ship_add_1;
      inv_data['invoice'][0]['ship_addr2'] = ship_add_2;
      inv_data['invoice'][0]['ship_city'] = ship_city;
      inv_data['invoice'][0]['ship_pincode'] = ship_pin;
      inv_data['invoice'][0]['ship_country'] = ship_country;
      inv_data['invoice'][0]['ship_state'] = ship_state;
      
      if(string_preg($("#ship_country_edit").val())!="INDIA"){
        inv_data['invoice'][0]['cust_pos'] = "INTERNATIONAL";
        $("#pos_name_edit").val("INTERNATIONAL").trigger('change');
      }else{
        inv_data['invoice'][0]['cust_pos'] = ship_state;
        $("#pos_name_edit").val(ship_state).trigger('change');
      }
      
      data_alter(inv_data);
      gst_alter();
      final_charges_alter();
      // $("zero_rated").trigger('change');

      $('#address_edit_model').modal('toggle');
    }else{
      alert("Please Enter Customer Name Or Bussiness Name")
    }
  });

  $('#pos_name_edit').on('change',function () {
    if(inv_data['invoice'][0]['cust_id']){
      var pos_val=string_preg($("#pos_name_edit").val());
      inv_data['invoice'][0]['cust_pos'] = pos_val
      data_alter(inv_data);
      gst_alter();
      final_charges_alter();
    }
  });

  $('#split_enable_btn').change(function() {
      if ($('#split_enable_btn').is(":checked")) {
          $('#split_save_btn').text('Split Payment');
          $('#split_save_btn').show();
          split_total_amt = 0;
          for (var i = 0; i <= split_inner_id; i++) {
              split_total_amt = split_total_amt + parse_float_2($('[split_id="' + i + '"] .split_pay_amt').val());
          }
          if (split_total_amt > inv_data['invoice'][0]['total_amt']) {
              alert({
                  'msg': 'Split Total Must Be Equal To Total Amount',
                  'type': 'warning'
              });
          }
          if (split_total_amt == inv_data['invoice'][0]['total_amt']) {
              $('#split_save_btn').removeAttr('disabled');
          } else {
              $('#split_save_btn').attr('disabled', 'disabled');
          }

      } else {
          $('#split_save_btn').hide();
          for (var i = 0; i <= split_inner_id; i++) {
              split_total_amt = split_total_amt + parse_float_2($('[split_id="' + i + '"] .split_pay_amt').val(0));
              split_data[i]['amt'] = 0;
          }
          $('#split_save_btn').removeAttr('disabled');
      }

  });

  $(".create").click(function(){
    var doc_type = $(this).attr('data-doc');
    if(doc_type == 'domestic-invoice') {
    window.open(Ledgers.APP+"invoice/create-invoice","_blank");
    } else if(doc_type == 'international-invoice') {
    window.open(Ledgers.APP+"invoice/create-invoice?operation=export-invoice","_blank");
    } else if(doc_type == 'estimate') {
    window.open(Ledgers.APP+"invoice/create-invoice?operation=create-estimate","_blank");
    } else if(doc_type == 'bill_doc') {
    window.open(Ledgers.APP+"invoice/create-invoice?operation=create-bill","_blank");
    } else if(doc_type == 'dc_doc') {
    window.open(Ledgers.APP+"invoice/create-invoice?operation=create-dc","_blank");
    } else if(doc_type == 'credit-note') {
    window.open(Ledgers.APP+"invoice/create-invoice?operation=create-credit-note","_blank");
    } else if(doc_type == 'sync_from_gst') {
    window.open(Ledgers.APP+"gstr/sales-invoice-gstr1","_blank");
    } else if(doc_type == 'receipt') {
    popup('quick-receipt');
    }
  });

  if (operation == 'create-invoice') {
    $('#split_pay_btn , #split_pay_td').show();
    // $('#notify_settings, #notify_settings-copy').find("option[value='0']").attr("selected", true);
    $('.doc_types').html('Domestic Invoice');
    $('.domestic-invoice').hide();
    $('.doc_type').html('Invoice');
    $('.doc_type_btn').html('Create Invoice');
    $('.notify_doc_type').html('Create Invoice Only');
    $('#head_text').html('GST Invoice');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show();
    t = 'invoice';
    preload_documnets();
    if(cust_id && cust_id>0){      
      $(".customer_list").append('<option value=' + cust_id + ' selected="selected"></option>');
      $('.customer_list').trigger('change');
    }
  } else if (operation == 'create-bill-of-supply' || operation == 'create-bill') {
    $('#final_cgst_amt_row , #final_sgst_amt_row , #final_igst_amt_row').hide();
    // $('#notify_settings, #notify_settings-copy').find("option[value='0']").attr("selected", true);
    $('.notify_doc_type').html('Create Bill Only');
    $('.doc_types').html("Bill Of Supply");
    $('.bill_doc').hide();
    $('.doc_type').html("Bill");
    $('.doc_type_btn').html('Create Bill');
    $('#head_text').html('Bill of Supply');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show()
    $('#reverse_charge_tr, #zero_rated_tr, #special_supply_tr').hide()
    t =  'bill';
    const gst_type = 0;
    inv_data['operation'] = 'create-bill';
    preload_documnets();
    if(cust_id && cust_id>0){      
      $(".customer_list").append('<option value=' + cust_id + ' selected="selected"></option>');
      $('.customer_list').trigger('change');
    }
  } else if (operation == 'create-estimate') {
    $('#split_pay_btn , #split_pay_td').show();
    // $('#notify_settings, #notify_settings-copy').find("option[value='4']").attr("selected", true);
    $('#split_pay_btn').removeAttr('disabled');
    $('.notify_doc_type').html('Create Estimate Only');
    $('.doc_types').html('Estimate');
    $('.estimate').hide();
    $('.doc_type').html('Estimate');
    $('#inv_prefix_div').show()
    if (Ledgers.user.control['online_payments'] == 1) {
      $('.doc_type_btn').html('Email estimate & payment link');
    } else {
      $('.doc_type_btn').html('Create Estimate');
    }
    $('#head_text').html('Estimate');
    $('#due_date_text').html('Estimate Validity');
    t =  'estimate';
    inv_data['operation'] = 'create-estimate';
    preload_documnets();
    if(cust_id && cust_id>0){      
      $(".customer_list").append('<option value=' + cust_id + ' selected="selected"></option>');
      $('.customer_list').trigger('change');
    }
  } else if (operation == 'export-invoice') {
    $('#split_pay_btn , #split_pay_td').show();
    // $('#notify_settings, #notify_settings-copy').find("option[value='6']").attr("selected", true);
    $('.international-invoice,.notify_pay').hide();
    $('.doc_types').html("International Invoice");
    $('.doc_type').html("Invoice");
    $('#pos_name_edit').prop('disabled', false);
    $('.doc_type_btn').html('Create Invoice');
    $('.notify_doc_type').html('Create Invoice Only');
    $('#head_text').html('GST Invoice');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show();
    
    $('#zero_rated').find("option[value='1']").attr("selected", true);
    $('#export_bond_status').find("option[value='1']").attr("selected", true);
    $('#zero_rated').trigger('change');
    $('#zero_rated').prop('disabled', true);
    $('#export_bond_status').trigger('change');
    const gst_type = 0;
    t =  'invoice';
    $('.currency_div').show();
    $.ajax({
      type: "POST",
      url: Ledgers.APP + "/public/api/currency_rates",
      dataType: "JSON",
      data: {
        operation: 'currency_list'
      },
      async: false,
      success: function (response) {
        if (response['status'] == 1) {
          currency_list = response['data']['currency_list'];
          $.each(currency_list, function(key, value) {
            $("#currency_list").append('<option value="'+key+'">'+ value + ' - ' + key +'</option>');
          });
          $('#currency_list').find("option[value='INR']").attr("selected", true);
        }
      }
    });
    $('#currency_list').select2();
    preload_documnets();
    if(cust_id && cust_id>0){      
      $(".customer_list").append('<option value=' + cust_id + ' selected="selected"></option>');
      $('.customer_list').trigger('change');
    }
  } else if (operation == 'create-credit-note') {
    // $('#notify_settings, #notify_settings-copy').find("option[value='6']").attr("selected", true);
    $('.doc_types').html('Credit Note');
    $('.credit,.notify_pay').hide();
    $('.doc_type').html('Note');
    $('.doc_type_btn').html('Issue Credit Note');
    $('.notify_doc_type').html('Issue Credit Only');
    $('#head_text').html('Credit Note');
    $('#inv_prefix_div').show();
    t =  'note';
    inv_data['operation'] = 'create-credit-note';
    $('.credit_select_invoice_div').show();
    preload_documnets();
    $('.item_rate_qty,.item_gst_amt,.item_rate').prop('readonly', false);
    $('.item_list,.item_rate_qty,.item_gst_amt').prop('disabled', true);
    if(inv_number){
      $("#credit_select_invoice").append('<option value=' + inv_number + ' selected="selected">'+ inv_number +'</option>');
      $('#credit_select_invoice').trigger('change');
      $('#credit_select_invoice').prop('disabled', true);
      // $(".customer_list").append('<option value=' + inv_data['invoice'][0]['cust_id'] + ' selected="selected"></option>');
      // $('.customer_list').trigger('change');
    }
    if(cust_id && cust_id>0){      
      $(".customer_list").append('<option value=' + cust_id + ' selected="selected"></option>');
      $('.customer_list').trigger('change');
    }
  } else if (operation == 'create-dc') {
    $('#notify_settings, #notify_settings-copy').find("option[value='6']").attr("selected", true);
    $('.doc_types').html('Delivery Challan');
    $('.dc_doc,.notify_pay').hide();
    $('.doc_type').html('Challan');
    $('.doc_type_btn').html('Create Delivery Challan');
    $('.notify_doc_type').html('Create DC Only');
    $('#head_text').html('Delivery Challan');
    $('#due_date_text').html('Delivery Challan');
    $('#inv_prefix_div').show();
    $('.dc').show();
    t =  'dc';
    preload_documnets();
    if(cust_id && cust_id>0){     
      $(".customer_list").append('<option value=' + cust_id + ' selected="selected"></option>');
      $('.customer_list').trigger('change');
    }
  } else if (operation == 'convert-invoice') {
    $('#cust_det_div ,#cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
    $('#split_pay_btn , #split_pay_td').show();
    $('#notify_settings, #notify_settings-copy').find("option[value='6']").attr("selected", true);
    $('.doc_types').html('Domestic Invoice');
    $('#pos_name_edit').prop('disabled', false);
    $('.domestic-invoice').hide();
    $('.doc_type').html('Invoice');
    $('.doc_type_btn').html('Create Invoice');
    $('.notify_doc_type').html('Create Invoice Only');
    $('#head_text').html('GST Invoice');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show();
    t =  'invoice';

    preload_documnets();
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/get-estimate-api",
      dataType: "JSON",
      async: false,
      data: {
        'token': 'session',
        'est_number': est_number,
        'source': 'estimate'
      },
      success: function (data) {
        if (data['status'] != 0) {
          inv_data = data;
          inv_data['est_number'] = est_number;
          inv_data['operation'] = 'create-invoice-e';
          inv_data['bid'] = Ledgers.user.bid;
          var d = new Date();
          var day = ("0" + d.getDate()).slice(-2);
          var month = ("0" + (d.getMonth() + 1)).slice(-2);
          var year = d.getFullYear();
          var today_date = d.getFullYear() + "-" + month + "-" + day; //14-05-2018

          var priorDate = new Date().setDate(d.getDate() + 29);
          priorDate_1 = new Date(priorDate);
          var day_1 = ("0" + priorDate_1.getDate()).slice(-2);
          var month_1 = ("0" + (priorDate_1.getMonth() + 1)).slice(-2);
          var year_1 = priorDate_1.getFullYear();
          var newDate_1 = priorDate_1.getFullYear() + "-" + month_1 + "-" + day_1; //14-05-2018
          inv_data['invoice'][0]['inv_date'] = today_date;
          inv_data['invoice'][0]['inv_due_date'] = newDate_1;
          data_alter(inv_data);
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': data['invoice'][0]['added_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $('#final_adjust_amt').val(inv_data['invoice'][0]['total_adjust_amt']);
                $('#username').val(data['gid_name']);
                $('#inv_time').val(inv_data['invoice'][0]['added_on']);
              }
            }
          });
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': data['invoice'][0]['sales_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $("#sales_person_list").append('<option selected="" value="0">None</option><option selected="" value="' + inv_data['invoice'][0]['sales_by'] + '">' + data['gid_name'].toUpperCase() + '</option>');

              }
            }
          });
         
        } else {
          alert({
            'type': 'danger',
            'msg': 'Estimate #' + est_number + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "invoice/create-invoice";
        }

      }
    }); 
    preload_edit();
  } else if (operation == 'copy-invoice') {
    $('#cust_det_div ,#cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
    $('#split_pay_btn , #split_pay_td').show();
    // $('#notify_settings, #notify_settings-copy').find("option[value='6']").attr("selected", true);
    $('.doc_types').html('Domestic Invoice');
    $('#pos_name_edit').prop('disabled', false);
    $('.domestic-invoice').hide();
    $('.doc_type').html('Invoice');
    $('.doc_type_btn').html('Create Invoice');
    $('.notify_doc_type').html('Create Invoice Only');
    $('#head_text').html('GST Invoice');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show();
    t =  'invoice';
    preload_documnets();
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/get-invoice-api",
      dataType: "JSON",
      async: false,
      data: {
        'token': 'session',
        'inv_number': inv_number,
        'source': 'estimate'
      },
      success: function (data) {
        if (data['status'] != 0) {
          inv_data = data;
          inv_data['est_number'] = est_number;
          inv_data['operation'] = 'create-invoice-e';
          inv_data['bid'] = Ledgers.user.bid;
          inv_data['invoice'][0]['inv_date']=today_date;
          var priorDate = new Date().setDate(date.getDate() + parseInt(due_date_interval));
          priorDate_1 = new Date(priorDate);
          var day_1 = ("0" + priorDate_1.getDate()).slice(-2);
          var month_1 = ("0" + (priorDate_1.getMonth() + 1)).slice(-2);
          var newDate_1 = priorDate_1.getFullYear() + "-" + month_1 + "-" + day_1;
          inv_data['invoice'][0]['inv_due_date'] = newDate_1;
          data_alter(inv_data);
          
        } else {
          alert({
            'type': 'danger',
            'msg': 'Invoice #' + est_number + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "invoice/create-invoice";
        }
      }
    });
    preload_edit();
  } else if (operation == 'edit-invoice') {
    $('#cust_det_div ,#cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
    $('.notify_doc_type').html('Update Invoice Only');
    $('.doc_types').html('Domestic Invoice');
    $('.domestic-invoice,.notify_pay').hide();
    $('.doc_type , #head_text').html('Invoice');
    $('#pos_name_edit').prop('disabled', false);
    $('.inv_no, .inv_prefix').attr("disabled", "disabled");
    $('#notify_settings, #notify_settings-copy').find("option[value='0']").attr("selected", true);
    $('#notify_settings').prop('disabled', true);
    $('#invoice-btn-text, #invoice-btn-text-copy').html(' Update Invoice');
    $('#head_panel').show();
    $('#inv_prefix_div').show();
    
    inv_data['operation'] = 'edit-invoice';
    inv_operation = 'edit-invoice';
    
    if (inv_number == '' || inv_number == undefined) {
      window.location.href = Ledgers.APP + "invoice/create-invoice";
    }
    preload_documnets();

    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/get-invoice-api",
      dataType: "JSON",
      async: false,
      data: {
        'token': 'session',
        'inv_number': inv_number
      },
      success: function (data) {
        if (data['status'] != 0) {
          inv_data = data;
          data_alter(inv_data);
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': data['invoice'][0]['added_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $('#final_adjust_amt').val(inv_data['invoice'][0]['total_adjust_amt']);
                $('#username').val(data['gid_name']);
                $('#inv_time').val(inv_data['invoice'][0]['added_on']);
              }
            }
          });
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': inv_data['invoice'][0]['sales_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $("#sales_person_list").append('<option selected="" value="0">None</option><option selected="" value="' + inv_data['invoice'][0]['sales_by'] + '">' + data['gid_name'].toUpperCase() + '</option>');

              }
            }
          });

        } else {
          alert({
            'type': 'danger',
            'msg': 'Invoice #' + inv_number + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "create-invoice";
        }
      }
    });

    preload_edit();
  } else if (operation == 'edit-export-invoice') {
    $('#cust_det_div ,#cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
    $('#split_pay_btn , #split_pay_td').show();
    $('#notify_settings, #notify_settings-copy').find("option[value='0']").attr("selected", true);
    $('#notify_settings').prop('disabled', true);
    $('.doc_types').html('International Invoice');
    $('.international-invoice,.notify_pay').hide();
    $('.doc_type').html('Invoice');
    $('#pos_name_edit').prop('disabled', false);
    $('#zero_rated').prop('disabled', true);
    $('.doc_type_btn').html('Update Invoice');
    $('.inv_no, .inv_prefix').attr("disabled", "disabled");
    $('.notify_doc_type').html('Update Invoice Only');
    $('#head_text').html('GST Invoice');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show();
    $('.currency_div').show();
    $.ajax({
      type: "POST",
      url: Ledgers.APP + "/public/api/currency_rates",
      dataType: "JSON",
      data: {
        operation: 'currency_list'
      },
      async: false,
      success: function (response) {
        if (response['status'] == 1) {
          currency_list = response['data']['currency_list'];
          $.each(currency_list, function(key, value) {
            $("#currency_list").append('<option value="'+key+'">'+ value + ' - ' + key +'</option>');
          });
          $('#currency_list').find("option[value='INR']").attr("selected", true);
        }
      }
    });
    $('#currency_list').select2();
    preload_documnets();
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/get-invoice-api",
      dataType: "JSON",
      async: false,
      data: {
        'token': 'session',
        'inv_number': inv_number
      },
      success: function (data) {
        if (data['status'] != 0) {
          inv_data = data;
          data_alter(inv_data);
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': data['invoice'][0]['added_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $('#final_adjust_amt').val(inv_data['invoice'][0]['total_adjust_amt']);
                $('#username').val(data['gid_name']);
                $('#inv_time').val(inv_data['invoice'][0]['added_on']);
              }
            }
          });
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': inv_data['invoice'][0]['sales_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $("#sales_person_list").append('<option selected="" value="0">None</option><option selected="" value="' + inv_data['invoice'][0]['sales_by'] + '">' + data['gid_name'].toUpperCase() + '</option>');

              }
            }
          });

        } else {
          alert({
            'type': 'danger',
            'msg': 'Invoice #' + inv_number + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "create-invoice";
        }
      }
    });

    preload_edit();
  } else if (operation == 'edit-estimate') {
    $('#cust_det_div ,#cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
    $('#notify_settings, #notify_settings-copy').find("option[value='0']").attr("selected", true);
    $('#notify_settings').prop('disabled', true);
    $('.doc_types').html('Estimate');
    $('.estimate,.notify_pay').hide();
    $('#pos_name_edit').prop('disabled', false);
    $('.doc_type').html('Estimate');
    $('.doc_type_btn').html('Update Estimate');
    $('.inv_no, .inv_prefix').attr("disabled", "disabled");
    $('.notify_doc_type').html('Update Estimate Only');
    $('#head_text').html('Estimate');
    $('#due_date_text').html('Validity Date');
    $('#inv_prefix_div').show();
    t =  'estimate';
    preload_documnets();
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/get-estimate-api",
      dataType: "JSON",
      async: false,
      data: {
        'token': 'session',
        'est_number': est_number
      },
      success: function (data) {
        ship_add = data['shipping_address'];
        // decimal_point =data['decimal_point'];
        if (data['status'] != 0) {
          inv_data = data;
          data_alter(inv_data);

          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': data['invoice'][0]['added_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $('#final_adjust_amt').val(inv_data['invoice'][0]['total_adjust_amt']);
                $('#username').val(data['gid_name']);
                $('#inv_time').val(inv_data['invoice'][0]['added_on']);
              }
            }
          });
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': inv_data['invoice'][0]['sales_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $("#sales_person_list").append('<option selected="" value="0">None</option><option selected="" value="' + inv_data['invoice'][0]['sales_by'] + '">' + data['gid_name'].toUpperCase() + '</option>');

              }
            }
          });
        } else {
          alert({
            'type': 'danger',
            'msg': 'Estimate #' + est_number + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "create-invoice&operation=create-estimate";
        }
      }
    });

    preload_edit()
  } else if (operation == 'edit-bill') {
    $('#cust_det_div, #cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
    $('#notify_settings, #notify_settings-copy').find("option[value='0']").attr("selected", true);
    $('#notify_settings').prop('disabled', true);
    $('.doc_types').html('Bill Of Supply');
    $('.bill_doc,.notify_pay').hide();
    $('.doc_type').html('Bill');
    $('#pos_name_edit').prop('disabled', false);
    $('.doc_type_btn').html('Update Bill Of Supply');
    $('.notify_doc_type').html('Update Bill Only');
    $('.inv_no, .inv_prefix').attr("disabled", "disabled");
    $('#head_text').html('GST Invoice');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show();
    $('#reverse_charge_tr, #zero_rated_tr, #special_supply_tr').hide()
    t =  'bill';
    const gst_type = 0;
    preload_documnets();
    $.ajax({
      type: "POST",
      url: Ledgers.API + "invoice/get-bill-api",
      dataType: "JSON",
      async: false,
      data: {
        'bid': Ledgers.user.bid,
        'bill_number': bill_number
      },
      success: function (data) {
        if (data['status'] != 0) {
          inv_data = data;
          var bal = parse_float_2(inv_data['invoice'][0]['total_amt']) - parse_float_2(inv_data['invoice'][0]['paid_amt']);
          //invoice_widget({'mode':'edit-invoice','delivered':0,'total':inv_data['invoice'][0]['total_amt'],'paid':inv_data['invoice'][0]['paid_amt'],'due':bal});  
          data_alter(inv_data);
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': data['invoice'][0]['added_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $('#final_adjust_amt').val(inv_data['invoice'][0]['total_adjust_amt']);
                $('#username').val(data['gid_name']);
                $('#inv_time').val(inv_data['invoice'][0]['added_on']);
              }
            }
          });
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': inv_data['invoice'][0]['sales_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $("#sales_person_list").append('<option selected="" value="0">None</option><option selected="" value="' + inv_data['invoice'][0]['sales_by'] + '">' + data['gid_name'].toUpperCase() + '</option>');

              }
            }
          });
        } else {
          alert({
            'type': 'danger',
            'msg': 'Bill #' + inv_number + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "invoice/create-invoice?operation=create-bill-of-supply";
        }
      }
    });
    
    preload_edit();
  } else if (operation == 'edit-dc') {
    $('#cust_det_div , #cust_det_div_adres, #cust_add_div, #ship_addr_div').show();
    $('#notify_settings, #notify_settings-copy').find("option[value='0']").attr("selected", true);
    $('#notify_settings').prop('disabled', true);
    $('.doc_types').html('Delivery Challan');
    $('.dc_doc,.notify_pay').hide();
    $('.doc_type').html('Challan');
    $('#pos_name_edit').prop('disabled', false);
    $('.doc_type_btn').html('Update Delivery Challan');
    $('.notify_doc_type').html('Update DC Only');
    $('.inv_no, .inv_prefix').attr("disabled", "disabled");
    $('#head_text').html('Delivery Challan');
    $('#due_date_text').html('Delivery Challan');
    $('#inv_prefix_div').show();
    $('.dc').show();
    t =  'dc';
    preload_documnets();
    $.ajax({
      type: "POST",
      url: Ledgers.API + "delivery/get-dc-api",
      dataType: "JSON",
      async: false,
      data: {
        'token': 'session',
        'dc_number': dc_number
      },
      success: function (data) {
        if (data['status'] != 0) {
          dc_data =  data;
          inv_data['invoice'] = data['dc'];
          inv_data['invoice'][0]['inv_number'] = data['dc'][0]['dc_number'];
          inv_data['invoice'][0]['inv_date'] = data['dc'][0]['dc_date'];
          inv_data['invoice'][0]['inv_due_date'] = data['dc'][0]['dc_date'];
          data_alter(inv_data);
          $.ajax({
            type: "POST",
            url: Ledgers.API + "helper/helper",
            dataType: "JSON",
            async: false,
            data: {
              'listing': 'gid_name',
              'gid': data['dc'][0]['added_by']
            },
            success: function (data) {
              if (data['status'] == 1) {
                $('.despatched_by').val(dc_data['dc'][0]['despatched_by']);
                $('.vehicle_no').val(dc_data['dc'][0]['veh_no']);
                $('#username').val(data['gid_name']);
                $('#inv_time').val(dc_data['dc'][0]['added_on']);
              }
            }
          });
        } else {
          alert({
            'type': 'danger',
            'msg': 'Challan #' + dc_number + ' Does Not Exists'
          });
          window.location.href = Ledgers.APP + "delivery/manage-dc";
        }
      }
    });

    preload_edit();
  } else {
    $('#split_pay_btn , #split_pay_td').show();
    operation = 'create-invoice';
    // $('#notify_settings, #notify_settings-copy').find("option[value='6']").attr("selected", true);
    $('.notify_doc_type').html('Create Invoice Only');
    $('.doc_types').html('Domestic Invoice');
    $('.domestic-invoice').hide();
    $('.doc_type').html('Invoice');
    $('.doc_type_btn').html('Create Invoice');
    $('#head_text').html('GST Invoice');
    $('#due_date_text').html('Due Date');
    $('#inv_prefix_div').show()
    t =  'invoice';
    preload_documnets();
    if(cust_id && cust_id>0){
      $(".customer_list").append('<option value=' + cust_id + ' selected="selected"></option>');
      $('.customer_list').trigger('change');

      // var select_customer_id= cust_id;
      // $.ajax({
      //   type: "POST",
      //   url: Ledgers.API + "customer/get-customer",
      //   dataType: "JSON",
      //   data: {
      //     token: 'session',
      //     'id': select_customer_id
      //   },
      //   async: false,
      //   success: function (customer_info) {
      //     customer_info_data = customer_info;
      //     if (customer_info_data['status'] != 0) {
      //       $(".customer_list").append('<option value=' + customer_info_data['customer'][0]['id'] + ' selected="selected">' + customer_info_data['customer'][0]['name'] + '</option>');
      //       $('.customer_list').trigger('change');
      //     }else{
      //       alert("Customer Does Not Exist");
      //     }
      //   }
      // });
    }
  }
  // preload_documnets();
});

function inv_create() {
  if (block_inv == 0) {
    $("#invoice-btn, #invoice-btn-copy").attr('disabled', 'true');
    $('.page-loader').show();
    var notify_settings = $('#notify_settings').val();
    if($.inArray(operation, ['create-invoice', 'create-bill-of-supply', 'create-bill', 'create-estimate', 'convert-invoice', 'copy-invoice', 'export-invoice' ]) != -1) {
      $.ajax({
        type: "POST",
        url: Ledgers.API + "invoice/create-" + t + "-api",
        dataType: "json",
        data: {
          'notify_settings': notify_settings,
          'force': 'false',
          'inv_data': inv_data,
          'auto_id': auto_id,
          'split_data': split_data
        },
        success: function (return_data) {
          $('.page-loader').hide();
          if (return_data['status'] == 1) {
            toastr.success(return_data['message']);
            if (operation == 'create-invoice') {
              window.location.href = Ledgers.APP + 'invoice/view-invoice?inv_number=' + inv_data['invoice'][0]['inv_number'] + '';
            } else if (operation == 'create-bill-of-supply' || operation == 'create-bill') {
              window.location.href = Ledgers.APP + 'invoice/view-invoice?bill_number=' + inv_data['invoice'][0]['inv_number'] + '';
            } else if (operation == 'create-estimate') {
              window.location.href = Ledgers.APP + 'invoice/view-invoice?est_number=' + inv_data['invoice'][0]['inv_number'] + '';
            } else {
              window.location.href = Ledgers.APP + 'invoice/view-invoice?inv_number=' + inv_data['invoice'][0]['inv_number'] + '';
            }
          } else if (return_data['status'] == 0) {
            $("#invoice-btn, #invoice-btn-copy").removeAttr('disabled');
            toastr.warning(return_data['message']);
            if (return_data['error_code'] == '102') {
              toastr.warning(t + ' number auto corrected. click create ' + t + ' now')
              if (t == 'invoice') {
                $('#inv_prefix').trigger('change');
                return 0;
              } else {
                $.ajax({
                  type: "POST",
                  url: Ledgers.API + "invoice/invoice-helper-service-api",
                  dataType: "JSON",
                  data: {
                    'operation': 'new-' + t + '-number'
                  },
                  success: function (return_data) {
                    inv_data['invoice'][0]['inv_number'] = return_data['' + t + '-number'];
                    inv_data['invoice'][0]['auto_num'] = return_data['' + t + '-number'];
                    inv_data['invoice'][0]['auto_mode'] = 1;
                    $(".inv_no").val(return_data['' + t + '-number']);
  
                  }
                });
              }
            }
  
          }
        }
      });
    } else if (operation == 'create-credit-note') {
      var note_data = {};
      note_data['note'] = inv_data['invoice'];
      note_data['bid'] = 0;
      note_data['operation']=operation;
      note_data['note'][0]['contact_id'] = inv_data['invoice'][0]['cust_id'];
      note_data['note'][0]['contact_name'] = inv_data['invoice'][0]['cust_name'];
      note_data['note'][0]['inv_id'] = inv_data['invoice'][0]['id'];
      note_data['note'][0]['gstin'] = inv_data['invoice'][0]['cust_gstin'];
      note_data['note'][0]['note_number'] = inv_data['invoice'][0]['inv_number'];
      note_data['note'][0]['note_date'] = inv_data['invoice'][0]['inv_date'];
      note_data['note'][0]['inv_number'] = inv_data['pinv_number'];
      note_data['note'][0]['inv_date'] = inv_data['pinv_date'];
      note_data['note'][0]['pay_due_date'] = inv_data['ppay_due_date'];
      var final_total_amt = 0;
      create_type = "credit"
      if (note_data["note"][0]["total_amt"] != "")
      {
        var final_total_amt = note_data["note"][0]["total_amt"];
      }
      $("#invoice-btn").attr("disabled", "true");
      $.ajax(
      {
        type: "POST",
        url: Ledgers.API + "note/create-credit-note-api",
        dataType: "json",
        data:
        {
          token: "session",
          force: "false",
          note_data: note_data,
          create_type: create_type,
          operation: operation,
          final_total_amt: final_total_amt
        },
        success: function (return_data){
          if (return_data['status'] == '1') {
            alert({
              'type': 'success',
              'msg': return_data['message']
            });
            window.location.href = Ledgers.APP + 'note/view-note?note_number=' + note_data['note'][0]['note_number'] + '&type=1';
          } else {
            $(".invoice-btn").removeAttr('disabled');
            alert({
              'type': 'danger',
              'msg': return_data['message']
            });
            if (return_data['error_code'] == '102') {
              t=note;
              toastr.warning(t + ' number auto corrected. click create ' + t + ' now')
              if (t == 'note') {
                $('#inv_prefix').trigger('change');
                return 0;
              } else {
                $.ajax({
                  type: "POST",
                  url: Ledgers.API + "invoice/invoice-helper-service-api",
                  dataType: "JSON",
                  data: {
                    'operation': 'new-' + t + '-number'
                  },
                  success: function (return_data) {
                    inv_data['invoice'][0]['inv_number'] = return_data['' + t + '-number'];
                    inv_data['invoice'][0]['auto_num'] = return_data['' + t + '-number'];
                    inv_data['invoice'][0]['auto_mode'] = 1;
                    $(".inv_no").val(return_data['' + t + '-number']);
  
                  }
                });
              }
            }
          }
        }
      })
    } else if (operation == 'create-dc') {
      var dc_data = {};
      dc_data['dc'] = inv_data['invoice'];
      dc_data['bid'] = 0;
      dc_data['dc'][0]['dc_number'] = inv_data['invoice'][0]['inv_number'];
      dc_data['dc'][0]['dc_date'] = inv_data['invoice'][0]['inv_date'];
      $.ajax({
        type: "POST",
        url: Ledgers.API + "delivery/create-dc-api",
        dataType: "json",
        data: {
          'force': 'false',
          'dc_data': dc_data,
          'operation': 'create-dc'
        },
        success: function (return_data) {
          if (return_data['status'] == '1') {
            alert({
              'type': 'success',
              'msg': return_data['message']
            });
            window.location.href = Ledgers.APP + 'invoice/view-invoice?dc_number=' + dc_data['dc'][0]['dc_number'] + '';
          } else {
            $(".invoice-btn").removeAttr('disabled');
            alert({
              'type': 'danger',
              'msg': return_data['message']
            });
          }

        }
      });
    } else if (operation == 'edit-invoice' || operation == 'edit-export-invoice') {
      $.ajax({
        type: "POST",
        url: Ledgers.API + "invoice/edit-invoice-api",
        dataType: "json",
        data: {
          'force': 'false',
          'inv_data': inv_data
        },
        success: function (return_data) {
          if (return_data['status'] == 1) {
            alert({
              'type': 'success',
              'msg': return_data['message']
            });
            window.location.href = Ledgers.APP + 'invoice/view-invoice?inv_number=' + inv_data['invoice'][0]['inv_number'] + '';
          } else {
            $(".invoice-btn").removeAttr('disabled');
            alert({
              'type': 'danger',
              'msg': return_data['message']
            });
          }
        }
      });
    } else if (operation == 'edit-estimate') {
      $.ajax({
        type: "POST",
        url: Ledgers.API + "invoice/edit-estimate-api",
        dataType: "json",
        data: {
          'force': 'false',
          'inv_data': inv_data
        },
        success: function (return_data) {
          if (return_data['status'] == '1') {
            alert({
              'type': 'success',
              'msg': return_data['message']
            });
            window.location.href = Ledgers.APP + 'invoice/view-invoice?est_number=' + inv_data['invoice'][0]['inv_number'] + '';
          } else {
            $(".invoice-btn").removeAttr('disabled');
            alert({
              'type': 'danger',
              'msg': return_data['message']
            });
          }
        }
      });
    } else if (operation == 'edit-bill') {
      $.ajax({
        type: "POST",
        url: Ledgers.API + "invoice/edit-bill-api",
        dataType: "json",
        data: {
          'force': 'false',
          'bill_data': inv_data,
          'operation': 'edit-bill'
        },
        success: function (return_data) {
          if (return_data['status'] == 1) {
            alert({
              'type': 'success',
              'msg': return_data['message']
            });
            window.location.href = Ledgers.APP + 'invoice/view-invoice?bill_number=' + inv_data['invoice'][0]['inv_number'] + '';
          } else {
            $(".invoice-btn").removeAttr('disabled');
            alert({
              'type': 'danger',
              'msg': return_data['message']
            });
          }
        }
      });
    } else if (operation == 'edit-dc') {
      var dc_data = {};
      dc_data['dc'] = inv_data['invoice'];
      dc_data['bid'] = 0;
      dc_data['dc'][0]['dc_number'] = inv_data['invoice'][0]['inv_number'];
      dc_data['dc'][0]['dc_date'] = inv_data['invoice'][0]['inv_date'];
      $.ajax({
        type: "POST",
        url: Ledgers.API + "delivery/edit-dc-api",
        dataType: "json",
        data: {
          'force': 'false',
          'dc_data': dc_data,
          'operation': 'edit-dc'
        },
        success: function (return_data) {
          if (return_data['status'] == '1') {
            alert({
              'type': 'success',
              'msg': return_data['message']
            });
            window.location.href = Ledgers.APP + 'invoice/view-invoice?dc_number=' + dc_data['dc'][0]['dc_number'] + '';
          } else {
            $(".invoice-btn").removeAttr('disabled');
            alert({
              'type': 'danger',
              'msg': return_data['message']
            });
          }
        }
      });
    } else {
      toastr.error("Something went wrong");
    }
    console.log(inv_data);
    return 0;
  }
}

function preload_edit(){
  let inv_edit_temp_data=JSON.parse(JSON.stringify(inv_data));
  for (var i = 0; i < inv_edit_temp_data['invoice'][0]['others'].length; i++) {
    charge_type = inv_edit_temp_data['invoice'][0]['others'][i]['charge_type'];
    auto_add_charge = 1;
    $("#additional_charges").val(charge_type).trigger("change");
  }

  $("#reverse_charge").val(inv_edit_temp_data['invoice'][0]['reverse_charge']);
  $("#reverse_charge").trigger('change');

  $("#zero_rated").val(inv_edit_temp_data['invoice'][0]['export_type']);
  $("#zero_rated").trigger('change');

  $("#export_bond_status").val(inv_edit_temp_data['invoice'][0]['export_lut']);
  $("#export_bond_status").trigger('change');

  $("#ship_bill_no").val(inv_edit_temp_data['invoice'][0]['export_bill_no']);
  $("#ship_bill_no").trigger('change');

  $("#ship_port_code").val(inv_edit_temp_data['invoice'][0]['export_port_code']);
  $("#ship_port_code").trigger('change');

  $(".ship_bill_date").val(inv_edit_temp_data['invoice'][0]['export_bill_date']);
  $(".ship_bill_date").trigger('change');

  $("#special_supply").val(inv_edit_temp_data['invoice'][0]['special_supply']);
  $("#special_supply").trigger('change');

  $("#ship_port_code").val(inv_edit_temp_data['invoice'][0]['ship_port_code']);
  $("#ship_port_code").trigger('change');

  $("#sales_person_list").val(inv_edit_temp_data['invoice'][0]['sales_by']);
  $("#sales_person_list").trigger('change');

  if(inv_edit_temp_data['invoice'][0]['extra_field'] != null && inv_edit_temp_data['invoice'][0]['extra_field']['bank_id'] !== undefined) {
    $("#bank_list").val(inv_edit_temp_data['invoice'][0]['extra_field']['bank_id']);
    $("#bank_list").trigger('change');
  }
  if(operation == 'edit-dc'){
    if (inv_edit_temp_data['invoice'][0]["extra_field"] != null && inv_edit_temp_data['invoice'][0]["extra_field"] !== undefined ){
      if(inv_edit_temp_data['invoice'][0]["extra_field"]){
        var temp_extra_field=JSON.parse(inv_edit_temp_data['invoice'][0]["extra_field"]);
        var obj=Object.values(temp_extra_field);
        if(obj.length>0){
          if(obj[0].cust_business_name){
            temp_extra_field=obj[0].cust_business_name;
          }
        }
      }
      inv_data['invoice'][0]['cust_business_name'] = temp_extra_field.cust_business_name;
      $('#customer_business_name').html(inv_edit_temp_data['invoice'][0]['cust_business_name']).css('color', '#428bca');
    }
  }

  if(operation == 'edit-export-invoice') {
    $("#currency_list").val(inv_edit_temp_data['invoice'][0]['currency']);
    $("#currency_list").trigger('change');
  }

  $("#ship_port_code").val(inv_edit_temp_data['invoice'][0]['sales_by']);
  $("#ship_port_code").trigger('change');
  $('.customer_list').append('<option value=' + inv_edit_temp_data['invoice'][0]['cust_id'] + ' selected="selected">' + inv_edit_temp_data['invoice'][0]['cust_name'] + '</option>');
  // $('.customer_list').trigger('change');
  $("#customer_bill_branch_list").append('<option value="' + i + '">' + inv_edit_temp_data['invoice'][0]['bill_addr1'] + '(' + inv_edit_temp_data['invoice'][0]['ship_state'] + ')</option>');
  $("#customer_branch_list").append('<option value="' + i + '">' + inv_edit_temp_data['invoice'][0]['ship_addr1'] + '(' + inv_edit_temp_data['invoice'][0]['bill_state'] + ')</option>');

  if(inv_edit_temp_data['invoice'][0]['bill_addr1'] != '') {
    $("#bill_add_1").show();
    $("#bill_add").hide();
  }
  if(inv_edit_temp_data['invoice'][0]['bill_addr2'] != ''){
    $("#bill_add_2").show();
    $("#bill_add").hide();
  }

  $('#final_taxable_amt').html(inv_edit_temp_data['invoice'][0]['total_taxable_amt']);
  $('#final_cgst_amt').html(inv_edit_temp_data['invoice'][0]['total_cgst_amt']);
  $('#final_sgst_amt').html(inv_edit_temp_data['invoice'][0]['total_sgst_amt']);
  $('#final_igst_amt').html(inv_edit_temp_data['invoice'][0]['total_igst_amt']);
  $('#final_cess_amt').html(inv_edit_temp_data['invoice'][0]['total_cess_amt']);
  $('#final_adjust_amt').val(inv_edit_temp_data['invoice'][0]['total_adjust_amt']);
  $('#final_total_amt').html(inv_edit_temp_data['invoice'][0]['total_amt']);

  notes = inv_edit_temp_data['invoice'][0]['notes'].split('~');
  $('#notes').val(notes[0]);
  $('#terms_conditions').val(notes[1]);
  inv_data['invoice'][0]['notes'] = notes[0];
  inv_data['invoice'][0]['terms_conditions'] = notes[1];
  var temp=0;
  for (var i = 0; i < inv_edit_temp_data['invoice'][0]['items'].length; i++) {
    if(ship_add == 2 && inv_edit_temp_data['invoice'][0]['items'][item_count]['item_type'] == 1) {
      $('#ship_addr_div').show();
    }
    inv_data['invoice'][0]['items'][item_count]['extra_field'] = JSON.parse(inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']);
    var item_disc = inv_edit_temp_data['invoice'][0]['items'][item_count]['discount'];
    if (inv_edit_temp_data['invoice'][0]['items'][item_count]["extra_field"] != null && inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['discount_per'] !== undefined ){
      item_disc = inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['discount_per'];
      inv_data['invoice'][0]['items'][item_count]['discount'] = inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['discount_per'];
    }
    if (inv_edit_temp_data['invoice'][0]['items'][item_count]["extra_field"] != null) {
      if (inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['nill_rate'] !== undefined && inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['nill_rate'] == 1)
        inv_data['invoice'][0]['items'][item_count]['other_than_gst'] = -1;
      else if(inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['nill_rate'] == undefined || inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['nill_rate'] == 0)
          inv_data['invoice'][0]['items'][item_count]['nill_rate'] = 0;
      else if(inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['zero_rate'] !== undefined && inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['zero_rate'] == 1)
        inv_data['invoice'][0]['items'][item_count]['other_than_gst'] = -2;
      else if(inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['exempted_supply'] !== undefined && inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['exempted_supply'] == 1)
        inv_data['invoice'][0]['items'][item_count]['other_than_gst'] = -3;
      else if(inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['non_gst'] !== undefined && inv_edit_temp_data['invoice'][0]['items'][item_count]['extra_field']['non_gst'] == 1)
        inv_data['invoice'][0]['items'][item_count]['other_than_gst'] = -4;
    }
    auto_add = 1;
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_list').append('<option value=' + inv_edit_temp_data['invoice'][0]['items'][item_count]['pid'] + ' selected="selected">' + inv_edit_temp_data['invoice'][0]['items'][item_count]['item_name'] + '</option>');
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_hsn').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['item_code']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_descr').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['item_description']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_rate').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['rate']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_rate').attr('rate_credit_max_limit',inv_edit_temp_data['invoice'][0]['items'][item_count]['rate']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_rate_qty').val(parse_float_2(inv_edit_temp_data['invoice'][0]['items'][item_count]['rate']*inv_edit_temp_data['invoice'][0]['items'][item_count]['quantity']));
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_taxable').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['taxable_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_non_taxable').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['non_taxable_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_qty').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['quantity']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_qty').attr('qty_credit_max_limit', inv_edit_temp_data['invoice'][0]['items'][item_count]['quantity']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_disc').val(item_disc);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_cess_amt').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['cess_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['item_type']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['sno']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_gst_rate', inv_edit_temp_data['invoice'][0]['items'][item_count]['gst_rate']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_name', inv_edit_temp_data['invoice'][0]['items'][item_count]['item_name']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_pid', inv_edit_temp_data['invoice'][0]['items'][item_count]['pid']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item-added', '2');
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_total_amt', inv_edit_temp_data['invoice'][0]['items'][item_count]['item_total_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_cess_amt').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['cess_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_cgst_per').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['cgst_rate']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sgst_per').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['sgst_rate']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_igst_per').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['igst_rate']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_gst_per').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['gst_rate']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_igst_amt').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['igst_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_cgst_amt').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['cgst_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sgst_amt').val(inv_edit_temp_data['invoice'][0]['items'][item_count]['sgst_amt']);
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_gst_amt').val(parseFloat(inv_edit_temp_data['invoice'][0]['items'][item_count]['sgst_amt']) + parseFloat(inv_edit_temp_data['invoice'][0]['items'][item_count]['cgst_amt']) + parseFloat(inv_edit_temp_data['invoice'][0]['items'][item_count]['igst_amt']));
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_total').val(parse_float_2(inv_edit_temp_data['invoice'][0]['items'][item_count]['item_total_amt']));
    var single_non_tax_amt = inv_edit_temp_data['invoice'][0]['items'][item_count]['non_taxable_amt'] / inv_edit_temp_data['invoice'][0]['items'][item_count]['quantity'];
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_non_taxable').attr('single_non_tax', single_non_tax_amt);
    if(operation == 'edit-export-invoice') {
      var rate_inr = inv_edit_temp_data['invoice'][0]['items'][item_count]['rate'] /  currency_rates[inv_edit_temp_data['invoice'][0]['currency']];
      var nontax_inr = single_non_tax_amt /  currency_rates[inv_edit_temp_data['invoice'][0]['currency']];
      var taxable_inr = rate_inr - nontax_inr;
      $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_rate_inr', rate_inr);
      $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_nontax_inr', nontax_inr);
      $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_sno').attr('item_taxable_inr', taxable_inr);
    }
    
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.gst_text').show();
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.gst_per_rate').html(inv_edit_temp_data['invoice'][0]['items'][item_count]['gst_rate'] + "%");

    if (ship_add == 2) $('#ship_addr_div').show();
    
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type_span').show();
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_hsn').attr('placeholder', 'HSN');
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type_span').html("HSN: "+inv_edit_temp_data['invoice'][0]['items'][item_count]['item_code']);
    
    if (inv_edit_temp_data['invoice'][0]['gst_type'] == 0) {
      $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type_span').hide();
    }
    else if(inv_edit_temp_data['invoice'][0]['items'][item_count]['gst_type'] == 1){
      // Hide If item_coded is empty
      if (inv_edit_temp_data['invoice'][0]['items'][item_count]['item_code'] == '') {
        $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_hsn').hide()
        $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type').hide()
        $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type_span').hide();
      } else {
        $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type_span').show();
        $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_hsn').show()
        $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type').show()
      }
    }
    else if(inv_edit_temp_data['invoice'][0]['items'][item_count]['gst_type'] == 2){
      $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_type_span').hide();
    }

    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.gst_per_rate').html(inv_edit_temp_data['invoice'][0]['items'][item_count]['gst_rate'] + "%");
    
    $('#item_master_table_body tr:nth-child('+ (i+1) +')').find('.item_descr').show()
    item_count++;
    $('.item_list').select2('destroy');
    var $tr    = $('#item_master_table_body tr:nth-child('+ (i+1) +')');
    var $clone = $tr.clone();
    $('.item_act_btn_del').show();
    $('.item_act_btn_edit').show();
    $('#select_customer').hide();
    $clone.find(':input:not([type="button"])').each(function(idx, ele) { ele.value = ""; });
    $('.item_list').select2();
    $('.item_list').prop('disabled', true);
    $clone.find('.item_list').select2({
      placeholder: "Select Item",
      ajax: {
          url: Ledgers.API + "product/list-product",
          dataType: 'json',
          delay: 250,
          data: function(params) {
              search_texts = params.term;
              return {
                  operation: 'list_product',
                  //type: custtype,
                  mode: 1,
                  q: params.term, // search term
                  page: params.page
              };
          },
          processResults: function(data, params) {
              for (var j = 0; j < 10; j++) {
                  items_fetch_data[item_fetch_count] = data['items'][j];
                  item_fetch_count++;
              }
              params.page = params.page || 1;
              return {
                  results: data.items,
                  pagination: {
                      more: (params.page * 10) < data.total_count
                  }
              };
          },
          cache: true
      },
      escapeMarkup: function(markup) {
          return markup;
      },
      language: {
          noResults: function(params) {
              if (search_texts != undefined && search_texts != '') {
                  return '<a href="#add-product" class="add_product_btn  " value="1"  >Add ' + search_texts + ' under Goods </a><br> <a href="#add-product"  class="add_product_btn" value="2">Add ' + search_texts + ' under Service</a>';
              }

          }
      },
      minimumInputLength: 0
    });
    $clone.find('tr').attr('item-id',item_count)
    $tr.after($clone);
    temp=i+1;
  }
  // during credit note to stop adding new product
  if(inv_data['operation'] == "create-credit-note"){
    $('#item_master_table_body tr:nth-child('+ (temp + 1) +')').remove();
    if(inv_data['invoice'][0]['items'].length==1){
      $('#item_master_table_body tr:nth-child('+ (inv_data['invoice'][0]['items'].length) +')').find('.item_act_btn_del').hide();
    }
  }
  // To Hide Last row gst rate and SAC or HSN Code Using temp variable
  $('#item_master_table_body tr:nth-child('+ (temp + 1) +')').find('.gst_text').hide();
  $('#item_master_table_body tr:nth-child('+ (temp + 1) +')').find('.item_type_span').hide();

  final_charges_alter();
}

