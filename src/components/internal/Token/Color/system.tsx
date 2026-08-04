import refColors from './reference';

const sysColors = {
  sys: {
    color: {
      label: {
        input: {
          default: refColors.ref.palette.neutral.b30,
          disabled: refColors.ref.palette.neutral.b30,
        },
      },
      primary: {
        enabled: refColors.ref.palette.blue.b90,
        pressed: refColors.ref.palette.blue.b70,
        hovered: refColors.ref.palette.blue.b80,
        disabled: refColors.ref.palette.neutral.b96,
      },
      on_primary: {
        variant: {
          default: refColors.ref.palette.neutral.b100,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.blue.b70,
          disabled: refColors.ref.palette.neutral.a20,
        },
      },
      secondary: {
        enabled: refColors.ref.palette.blue.b98,
        hovered: refColors.ref.palette.blue.b96,
        pressed: refColors.ref.palette.blue.b94,
        disabled: refColors.ref.palette.neutral.b96,
      },
      secondary_bold: refColors.ref.palette.blue.b96,
      on_secondary: {
        variant: {
          default: refColors.ref.palette.blue.b40,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.blue.b94,
          disabled: refColors.ref.palette.neutral.a20,
        },
      },
      tertiary: {
        enabled: refColors.ref.palette.neutral.a0,
        pressed: refColors.ref.palette.neutral.a20,
        hovered: refColors.ref.palette.neutral.a10,
        disabled: refColors.ref.palette.neutral.a0,
      },
      on_tertiary: {
        variant: {
          default: refColors.ref.palette.blue.b40,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.neutral.a0,
          disabled: refColors.ref.palette.neutral.a0,
        },
      },
      surface_highest: {
        default: refColors.ref.palette.neutral.b100,
        focused: refColors.ref.palette.blue.b98,
        disabled: refColors.ref.palette.neutral.b96,
      },
      surface_high: refColors.ref.palette.neutral.b99,
      surface_medium: refColors.ref.palette.neutral.b98,
      surface_low: refColors.ref.palette.neutral.b96,
      on_surface: {
        border_data_display: refColors.ref.palette.neutral.b100,
        placeholder: refColors.ref.palette.neutral.b51,
        border: {
          enabled: refColors.ref.palette.neutral.a10,
          hovered: refColors.ref.palette.neutral.a30,
          focused: refColors.ref.palette.blue.b40,
          disabled: refColors.ref.palette.neutral.a20,
        },
        variant: {
          default: refColors.ref.palette.neutral.b10,
          error: refColors.ref.palette.red.b86,
          warning: refColors.ref.palette.orange.b87,
          disabled: refColors.ref.palette.neutral.a50,
        },
        variant_small: {
          error: refColors.ref.palette.red.b60,
          default: refColors.ref.palette.neutral.b50,
        },
        border_bold: {
          enabled: refColors.ref.palette.neutral.a50,
        },
      },
      on_neutral: {
        border: refColors.ref.palette.neutral.b100,
        variant: refColors.ref.palette.neutral.b10,
      },
      neutral: refColors.ref.palette.neutral.b96,
      error: {
        default: refColors.ref.palette.red.b86,
        enabled: refColors.ref.palette.red.b86,
        disabled: refColors.ref.palette.neutral.b96,
        pressed: refColors.ref.palette.red.b60,
        hovered: refColors.ref.palette.red.b70,
      },
      on_error: {
        variant: {
          default: refColors.ref.palette.neutral.b100,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.red.b60,
          disabled: refColors.ref.palette.neutral.a20,
        },
      },
      error_text: {
        enabled: refColors.ref.palette.neutral.a0,
        hovered: refColors.ref.palette.red.b98,
        pressed: refColors.ref.palette.red.b96,
        disabled: refColors.ref.palette.neutral.a0,
      },
      on_error_text: {
        variant: {
          default: refColors.ref.palette.red.b35,
          disabled: refColors.ref.palette.neutral.a50,
        },
      },
      error_container: {
        default: refColors.ref.palette.red.b98,
        enabled: refColors.ref.palette.red.b98,
        pressed: refColors.ref.palette.red.b94,
        hovered: refColors.ref.palette.red.b96,
        disabled: refColors.ref.palette.neutral.b96,
      },
      on_error_container: {
        variant: {
          default: refColors.ref.palette.red.b35,
          disabled: refColors.ref.palette.neutral.a50,
          error: refColors.ref.palette.red.b60,
        },
        border: {
          default: refColors.ref.palette.red.b94,
          disabled: refColors.ref.palette.neutral.a20,
          hovered: refColors.ref.palette.red.b86,
          enabled: refColors.ref.palette.red.b94,
          focused: refColors.ref.palette.red.b35,
        },
        placeholder: refColors.ref.palette.red.b86,
      },
      warning: {
        default: refColors.ref.palette.orange.b87,
        enabled: refColors.ref.palette.orange.b87,
        pressed: refColors.ref.palette.orange.b60,
        hovered: refColors.ref.palette.orange.b70,
        disabled: refColors.ref.palette.neutral.b96,
      },
      on_warning: {
        variant: {
          default: refColors.ref.palette.neutral.b100,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.orange.b60,
          disabled: refColors.ref.palette.neutral.a20,
        },
      },
      warning_text: {
        enabled: refColors.ref.palette.neutral.a0,
        pressed: refColors.ref.palette.orange.b96,
        hovered: refColors.ref.palette.orange.b98,
        disabled: refColors.ref.palette.neutral.a0,
      },
      on_warning_text: {
        variant: {
          default: refColors.ref.palette.orange.b30,
          disabled: refColors.ref.palette.neutral.a50,
        },
      },
      warning_container: {
        enabled: refColors.ref.palette.orange.b98,
        pressed: refColors.ref.palette.orange.b94,
        hovered: refColors.ref.palette.orange.b96,
        disabled: refColors.ref.palette.neutral.b96,
      },
      on_warning_container: {
        variant: {
          default: refColors.ref.palette.red.b35,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.orange.b94,
          disabled: refColors.ref.palette.neutral.a20,
        },
      },
      success: {
        enabled: refColors.ref.palette.green.b73,
        pressed: refColors.ref.palette.green.b50,
        hovered: refColors.ref.palette.green.b60,
        disabled: refColors.ref.palette.neutral.b96,
      },
      on_success: {
        variant: {
          default: refColors.ref.palette.neutral.b100,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.green.b50,
          disabled: refColors.ref.palette.neutral.a20,
        },
      },
      success_container: {
        enabled: refColors.ref.palette.green.b95,
        disabled: refColors.ref.palette.neutral.b96,
        pressed: refColors.ref.palette.green.b90,
        hovered: refColors.ref.palette.green.b93,
      },
      on_success_container: {
        variant: {
          default: refColors.ref.palette.green.b20,
          disabled: refColors.ref.palette.neutral.a50,
        },
        border: {
          default: refColors.ref.palette.green.b90,
          disabled: refColors.ref.palette.neutral.a20,
        },
      },
      status: {
        default: refColors.ref.palette.neutral.b40,
        on_default: refColors.ref.palette.neutral.b100,
        default_container: refColors.ref.palette.neutral.b94,
        on_default_container: refColors.ref.palette.neutral.b20,

        inform: refColors.ref.palette.blue.b90,
        on_inform: refColors.ref.palette.neutral.b100,
        inform_container: refColors.ref.palette.blue.b98,
        on_inform_container: refColors.ref.palette.blue.b40,

        on_error_container: refColors.ref.palette.red.b35,

        success: refColors.ref.palette.green.b73,
        on_success_container: refColors.ref.palette.green.b20,

        warning: refColors.ref.palette.orange.b87,
        warning_container: refColors.ref.palette.orange.b98,
        on_warning_container: refColors.ref.palette.orange.b30,

        caution: refColors.ref.palette.yellow.b86,
        on_caution: refColors.ref.palette.yellow.b30,
        caution_container: refColors.ref.palette.yellow.b98,
        on_caution_container: refColors.ref.palette.yellow.b30,
      },
    },
    state: {
      default: {
        enabled: refColors.ref.palette.neutral.a0,
        hovered: refColors.ref.palette.neutral.a12,
        pressed: refColors.ref.palette.neutral.a20_bold,
      },
      on_container: {
        enabled: refColors.ref.palette.neutral.a0,
        hovered: refColors.ref.palette.neutral.a4,
        pressed: refColors.ref.palette.neutral.a8,
      },
    },
  },
};

export default sysColors;
