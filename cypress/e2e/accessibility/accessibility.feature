Feature: Accessibility
  Webpage should be free of accessibility violations.

  @accessibility
  Scenario Outline: Webpage is accessible
    Given I am visiting "<webpage>"
    Then "<severity>" accessibility checks should pass
    Examples:
      |webpage                 | severity |
      |example.cypress.io/     | minor    |
      |deque.com/axe/axe-core/ | critical |

