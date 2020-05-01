$(function() {
    'use strict';
    /*
        $('.servicios nav  a:first').on('click', function() {
            $('.nuestros-servicios div').hide();
            $('.nuestros-servicios div:first').show();
            $(this).css({ 'background-color': '#00b8c4' });
            return false;
        });
        $('.servicios nav  a:last').on('click', function() {
            $('.nuestros-servicios div').hide();
            $('.nuestros-servicios div:last').show();
            $(this).css({ 'background-color': '#00b8c4' });
            return false;
        });
        $('.servicios nav  a:first').on('click', function() {
            $('.nuestros-servicios div').hide();
            $('.nuestros-servicios div[1]').show();
            $(this).css({ 'background-color': '#00b8c4' });
            return false;
        });
        */


    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.servicios nav a').css({ 'background-color': '#00b8c4' });
        $(this).css({ 'background-color': '#db008d' });
        var enlace = $(this).attr('href'); //cargamos el atributo del enlace al hace click
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();



        return false; //para que no salte de pagina al hacer click
    }
});