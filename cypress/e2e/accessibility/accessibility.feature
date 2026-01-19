Feature: Accessibility
  Webpage should be free of accessibility violations.

  @accessibility
  Scenario Outline: Webpage is accessible
    Given I am visiting <webpage>
    Then accessibility checks should pass
    Examples:
      |webpage                                |
      |"w3.org/WAI/standards-guidelines/wcag/"|
      |"deque.com/axe/axe-core/"              |

