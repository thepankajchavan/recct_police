<?php
/**
 * Two-factor Email Code Configuration File
 **/

return [
    /**
     * Expiration time (minutes)
     * Type: integer
     * Default: 5
     */
    'expiration' => 5,

    /**
     * Two-factor code type
     * Values: number(using random_int()), string(Str::random())
     * Default: string
     */
    'type' => 'string',

    /**
     * Length to generate string type password
     * Default: 16
     */
    'random_string_lenght' => 16,

    /**
     * Starting number to generate numerical password
     * Default: 1000
     */
    'random_number_start' => 1000,

    /**
     * Final number to generate numerical password
     * Default: 9999
     */
    'random_number_end' => 9999,

];
