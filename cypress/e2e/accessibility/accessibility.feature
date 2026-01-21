Feature: Accessibility
  Webpage should be free of accessibility violations.

  @accessibility
  Scenario Outline: Webpage is accessible
    Given I am visiting "<webpage>"
    Then "<severity>" accessibility checks should pass
    Examples:
      |webpage                                | severity |
      |w3.org/WAI/standards-guidelines/wcag/  | serious  |
      |deque.com/axe/axe-core/                | critical |

